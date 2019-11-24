export enum PaneStatus {
  NORMAL,
  MAXIMIZED,
  MIINIMIZED,
}

function noNaN(n: number, def = 0): number {
  return Number.isNaN(n) ? def : n;
}

export class Range {
  public constructor(public min = 0, public max = 0) {}

  public contains(num: number): boolean {
    return (!this.min || num > this.min) && (!this.max || num < this.max);
  }

  public add(other: Range): this {
    this.min = !this.min ? other.min : this.min + other.min;
    this.max = (this.max === Number.MAX_VALUE || other.max === Number.MAX_VALUE) ? Number.MAX_VALUE : this.max + other.max;
    return this;
  }
}

// tslint:disable-next-line: max-classes-per-file
export class Pane extends Range {
  public curSize = 0;
  public status = PaneStatus.NORMAL;
  public paneSet?: PaneSet;
  public grow = 1;

  constructor(
      public name: string,
      public size: number,
      min = 10,
      max = NaN,
      grow = 1) {
    super(min || 10, max);
    this.curSize = this.size || 0;
    this.status = PaneStatus.NORMAL;
    if (grow)
        this.grow = grow;
  }

  getDisplaySize(): number {
    if (this.paneSet == null)
      return 0;
    if (this.paneSet.maxPane)
      return this.paneSet.maxPane === this ? this.paneSet.totalSize : 0;
    return this.status === PaneStatus.NORMAL ? this.curSize : 0;
  }

  visible(): boolean {
    return this.getDisplaySize() > 0;
  }

  setStatus(status: PaneStatus): this {
    if (this.status === status || !this.paneSet)
      return this;
    if (status === PaneStatus.MAXIMIZED) {
      this.paneSet.maxPane = this;
    } else {
      this.status = status;
    }
    return this;
  }

  toString() {
    return `{name:${this.name},curSize:${this.curSize.toFixed(2)}, grow:${this.grow.toFixed(2)}}`;
  }
}

class Remain {
  public size = 0;
  public grow = 0;
}

export default class PaneSet {
  public totalSize = 0;
  public panes = new Array<Pane>();
  public maxPane?: Pane;

  toString() {
    return `{totalSize:${this.totalSize},panes:[${this.panes}]}`;
  }

  addPane(pane: Pane): this {
    pane.paneSet = this;
    this.panes.push(pane);
    return this;
  }

  getPaneByName(name: string): Pane | undefined {
    return this.panes.find(p => p.name === name);
  }

  public setMaxPane(p: string | Pane) {
    this.maxPane = typeof p === 'string' ? this.getPaneByName(p) : p;
  }

  calculateSize(fromIdx = 0, toIdx = this.panes.length, totalSize = this.totalSize) {
    const remainPanes = new Set<Pane>();
    const remain = {
      size: totalSize,
      grow: 0,
    };

    for (let i = fromIdx; i < toIdx; i++) {
      const p = this.panes[i];
      if (p.size) {
        remain.size -= p.size;
        p.size = 0;
        continue;
      }

      if (p.status === PaneStatus.NORMAL) {
        remainPanes.add(p);
        remain.grow += p.grow;
      }
    }

    while (remainPanes.size > 0) {
      const outFitPanel = PaneSet.findOutFit(remainPanes, remain);
      if (!outFitPanel)
        break;
      remainPanes.delete(outFitPanel);
      remain.size -= outFitPanel.curSize;
      remain.grow -= outFitPanel.grow;
    }

    const perSize = remain.size / remain.grow;
    remainPanes.forEach((p) => { p.curSize = perSize * p.grow; });
    this.normalizeGrow();
  }

  normalizeGrow() {
    if (this.totalSize === 0)
      return; // Don't normalized if it's invisible
    let hiddenGrow = 0;  // Hidden grow is always normialized, we don't touch it
    this.panes.forEach(p => {
      if (p.status === PaneStatus.MIINIMIZED)
        hiddenGrow += p.grow;
    });

    this.panes.forEach(p => {
      if (p.status !== PaneStatus.MIINIMIZED) {
        p.grow = (1 - hiddenGrow) * p.curSize / this.totalSize;
      }
    });
  }

  /**
   * @returns return null, if no more outfit panels
   */
  static findOutFit(remainPanes: Set<Pane>, remain: Remain): Pane | null {
    const perSize = remain.size / remain.grow;
    let result: Pane | null = null;
    let delta = 0;
    let limitSize = 0;
    for (const p of Array.from(remainPanes)) {
      const size = perSize * p.grow;
      if (p.min && size < p.min && p.min - size > delta) {
        result = p;
        delta = p.min - size;
        limitSize = p.min;
      } else if (p.max && size > p.max && size - p.max > delta) {
        result = p;
        delta = size - p.max;
        limitSize = p.max;
      }
    }
    if (result != null)
      result.curSize = limitSize;
    return result;
  }

  getSizeRange(fromIdx = 0, toIdx = this.panes.length): Range {
    return this.panes
        .slice(fromIdx, toIdx)
        .filter(p => p.status !== PaneStatus.MIINIMIZED)
        .reduce((res, p) => res.add(p), new Range());
  }

  /**
   *  @param {Number} idx
   */
  getHandlePos(idx: number): number {
    return this.panes
        .slice(0, idx + 1)
        .reduce((res, p) => res += p.getDisplaySize(), 0);
  }

  moveHandle(idx: number, pos: number) {
    if (!this.getSizeRange(0, idx + 1).contains(pos) ||
        !this.getSizeRange(idx + 1).contains(this.totalSize - pos))
      return;

    this.calculateSize(0, idx + 1, pos);
    this.calculateSize(idx + 1, this.panes.length, this.totalSize - this.getHandlePos(idx));
  }
}
