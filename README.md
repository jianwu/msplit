# msplit

## Description

A   resizable multi-pane component. Support the following features:

* Supports toggle visibility for panes.
* Supports toggle maximization for a pane.
* Adjust pane size when the window resizes.
* Horizontal and Vertical mode.

## Usage

```javascript
import msplit from '../lib';
Vue.use(msplit);
```

```html
  <msplit :vertical='true' :maxPane='maxPane'>
    <div slot="p31" :show='s31' :grow='20' :min=250  :max=500> Pane31 </div>
    <div slot="p32" :show='s32'> Pane32 </div>
    <div slot="p33">Pane33 </div>
  </msplit>
```

You can see the full example in the [MSplitTest](https://github.com/jianwu/msplit/blob/master/src/components/MSplitTest.vue).

## Live Demo

http://jianwu.github.io/msplit/
