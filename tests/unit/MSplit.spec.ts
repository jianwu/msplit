import { shallowMount, mount } from '@vue/test-utils';
import Vue from 'vue';
import MSplit from '@/components/MSplit.vue';
import Counter from './counter';

describe('MSplit.vue', () => {
  it('renders', () => {
    const msg = 'new message';
    const wrapper = mount(MSplit, {
      slots: {
        p1: '<div grow="10">p1</div>',
        p2: '<div grow="20">p2</div>',
      },
    });
    const button = wrapper.find('button');
    button.trigger('click');

//    wrapper.vm.$forceUpdate();
//    Vue.nextTick();
    expect(wrapper.html()).toBe('abc');
    expect(wrapper.text()).toMatch(msg);
  });
});


