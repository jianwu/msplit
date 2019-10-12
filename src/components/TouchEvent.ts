/**
 * TypeScript by default doesn't include TouchEvent defination. We have to manually define here
 * Reference: https://stackoverflow.com/questions/12869055/does-typescript-support-touchevent
 */
export interface Touch {
  identifier: number;
  target: EventTarget;
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
}

export interface TouchList {
  length: number;
  item(index: number): Touch;
  identifiedTouch(identifier: number): Touch;
}

export interface TouchEvent extends UIEvent {
  touches: TouchList;
  targetTouches: TouchList;
  changedTouches: TouchList;
  altKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
}
