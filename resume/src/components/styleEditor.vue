<template>
  <div class="style_editor">
    <pre class="final_code" ref="content" v-html="finalShowCode"></pre>
    <div class="style" v-html="styleCode"></div>
  </div>
</template>

<script>
import Prism from 'prismjs';
import { resolve } from 'url';
export default {
  name: 'styleEditor',
  props: ["showCode", "code"],
  computed: {
    finalShowCode() {
      return Prism.highlight(this.showCode + this.code, Prism.languages.css, 'css');
    },
    styleCode() {
      return '<style>' + this.showCode + this.code +'</style>';
    }
  },
  methods: {
    goBottom() {
      this.$refs.content.scrollTop = 100000;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>