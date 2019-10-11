import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DirectiveBinding, DirectiveOptions } from 'vue/types/options';

const DEF_INTERVAL = 500;

/**
 * usage: <div v-on-resize:500='onWindowResize' />
 * Note: Don't set parent style to: min-width:100%. That will cause the parent stuck with the original size
 * even windows resized. So the size will be changed step by step slowly when window size shrinks.
 */
export class OnResizeDirective implements DirectiveOptions {
  static instance = new OnResizeDirective();
  bind(el: HTMLElement, binding: DirectiveBinding) {
    const ctx = el as any;
    ctx.handler = binding.value;
    ctx.width = el.clientWidth;
    ctx.height = el.clientHeight;
    let interval = binding.arg ? parseInt(binding.arg) : DEF_INTERVAL;
    if (Number.isNaN(interval) || interval < 50)
      interval = DEF_INTERVAL;

    ctx.timer = setInterval(() => {
      if (ctx.width === el.clientWidth && ctx.height === el.clientHeight)
        return;
      ctx.width = el.clientWidth;
      ctx.height = el.clientHeight;
      ctx.handler(ctx.width, ctx.height);
    }, interval);
  }

  unbind(el: HTMLElement) {
    const ctx = el as any;
    clearInterval(ctx.timer);
  }
}

export default {
  install(vue: typeof Vue) {
    vue.directive('on-resize', OnResizeDirective.instance);
  },
};

