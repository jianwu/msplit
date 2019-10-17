import { Component, Vue } from 'vue-property-decorator';

@Component({
  template: `
  <div>
    count:{{ count }}
    <button @click="increment">Increment</button>
  </div>
  `,
})
export default class Count extends Vue {
  count = 0;
  mounted() {
    this.count = 10;
  }

  increment() {
    this.count++;
  }
}
