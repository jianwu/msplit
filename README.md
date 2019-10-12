# msplit

A VueJs Component to show resizable multi-pan container

<a href="https://github.com/jianwu/msplit"><img alt="GitHub Actions status" src="https://github.com/jianwu/msplit/workflows/Node%20CI/badge.svg"></a> <!--a href="https://codecov.io/gh/JasonEtco/actions-toolkit/"><img src="https://badgen.now.sh/codecov/c/github/JasonEtco/actions-toolkit" alt="Codecov"></a-->

## Description

A resizable multi-pane vue component implemented with typescript. Support the following features:

* Supports toggle visibility for panes.
* Supports toggle maximization for a pane.
* Supports any number of panes.
* Adjust pane size when the window resizes.
* Horizontal and Vertical mode.
* Support device with touch interface.

## Usage

```javascript
import msplit from 'msplit';

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

## License

Copyright 2018-2019 Jianwu Chen <br>
Author/Developer: Jianwu Chen
