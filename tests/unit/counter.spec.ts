import { mount } from '@vue/test-utils';
import Counter from './counter';

it('button click should increment the count', () => {
  const wrapper = mount(Counter);
  const button = wrapper.find('button');
  button.trigger('click');
  console.log(`wrapper.vm.count=${wrapper.vm.count}`);
  console.log(`html=${wrapper.html()}`);
});
