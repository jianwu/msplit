export enum PaneStatus {
  NORMAL,
  MAXIMIZED,
  MIINIMIZED,
}

function noNaN(n: number, def = 0): number {
  return Number.isNaN(n) ? def : n;
}

export class Range {
  public min = 0;
  public max = 0;

  public constructor(min = 0, max = 0) {
    this.min = noNaN(min);
    this.max = noNaN(max);
  }

  public contains(num: number): boolean {
    return num > this.min && num < this.max;
  }

  public add(other: Range) {
    this.min += other.min;
    if (this.max === Number.MAX_VALUE && other.max === Number.MAX_VALUE)
      return;
    this.max += other.max;
  }
}

interface Attrs {
  size?: number;
  min?: number;
  max?: number;
  grow?: number;
  status?: PaneStatus;
}

// tslint:disable-next-line: max-classes-per-file
export class Pane extends Range {
  public name: string;
  public size = 0;  // Assume the initial size should always between min and max
  public curSize = 0;
  public grow = 1;  // The propotion to fill the remain spaces
  public status = PaneStatus.NORMAL;
  public paneSet?: PaneSet;
  public attrs: Attrs;

  constructor(name: string, size: number, min = 10, max = Number.MAX_VALUE, grow = 1, attrs = {}) {
    super(noNaN(min, 10), noNaN(max, Number.MAX_VALUE));
    this.name = name;
    this.size = noNaN(size);
    this.curSize = this.size;
    this.grow = noNaN(grow, 1);
    this.status = PaneStatus.NORMAL;
    this.attrs = attrs;
  }

  getDisplaySize(): number {
    if (this.paneSet == null)
      return 0;
    if (this.paneSet.maxPane)
      return this.paneSet.maxPane === this ? this.paneSet.totalSize : 0;
    return this.status === PaneStatus.NORMAL ? this.curSize : 0;
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

  /** @returns {String} */
  toString(): string {
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

  toString(): string {
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
      if (size < p.min && p.min - size > delta) {
        result = p;
        delta = p.min - size;
        limitSize = p.min;
      } else if (size > p.max && size - p.max > delta) {
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
    const res = new Range();
    for (let i = fromIdx; i < toIdx; i++) {
      const p = this.panes[i];
      if (p.status !== PaneStatus.NORMAL)
        continue;
      res.add(p);
    }
    return res;
  }

  /**
   *  @param {Number} idx
   */
  getHandlePos(idx: number): number {
    let result = 0;
    for (let i = 0; i <= idx; i++) {
      result += this.panes[i].getDisplaySize();
    }
    return result;
  }

  moveHandle(idx: number, pos: number) {
    if (!this.getSizeRange(0, idx + 1).contains(pos) ||
      !this.getSizeRange(idx + 1).contains(this.totalSize - pos))
      return;

    this.calculateSize(0, idx + 1, pos);
    this.calculateSize(idx + 1, this.panes.length, this.totalSize - this.getHandlePos(idx));
  }
}
