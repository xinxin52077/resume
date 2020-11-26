<template>
  <div id="app">
    <style-editor ref="styleEditor" :showCode="showCode" :code="code" />
    <resume-editor ref="resumeEditor" :resumeShowCode="resumeShowCode" :code="code" />
  </div>
</template>

<script>
import styleEditor from "./components/styleEditor";
import resumeEditor from "./components/resumeEditor";

import Markdown from 'markdown';
const md = Markdown.markdown.toHTML;
import workText from "raw-loader!./assets/work.txt";
import { resolve } from 'url';

export default {
  name: 'app',
  data() {
    return {
      showCode: '',
      resumeShowCode: '',
      code: '',
      finalCode: `
/*
 * 你好，我是欣欣
 * 找工作最重要的就是准备好一份简历
 * 现在我就来做一份简历！
 *
 * 好了，我要开始我的表演了。
 */

/* 首先给所有元素加上过渡效果 */
* {
  transition: all 1s;
}

/* 白色背景太单调了，我们来点背景 */
html {
  color: white;
  background-color: rgb(63, 82, 99);
}

/* 给文本加个边框 */
.final_code {
  overflow: auto;
  width: 48%;
  max-height: 90vh;
  padding: 1vh 0.5vw;
  margin: 3vh 0.5vw;
  background-color: rgb(48, 48, 48);
  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
  border: 1px solid #ccc;
  font-size: 14px;
  font-family: monospace;
  white-space: pre-wrap;
  outline: 0;
}

/* 代码高亮 */
.comment       { color: #857F6B; font-style: italic; }
.selector      { color: #E69F0F; }
.selector .key { color: #64D5EA; }
.key           { color: #64D5EA; }
.value         { color: #BE84F2; }
.value.px      { color: #F92772; }

/* 加点 3D 效果呗 */
body {
  perspective: 1000px;
}

.final_code {
  transform: rotateY(10deg);
  transform-origin: left;
}

/* 把这个框框移到右边先 */
.final_code {
  height: 45vh;
  transform: translateX(100%) rotateY(-10deg);
  transform-origin: right;
}

.style_editor {
  padding: 0 1vw 0 30%;
}

.final_code {
  height: 90vh;
  transform: translateX(100%) rotateY(-10deg);
  transform-origin: right;
}

/* 接下来先准备一个框 */
.resume_editor {
  position: fixed; 
  left: 0; 
  top: 0;
  margin: .5em;
  width: 45vw; 
  height: 90vh;
  border: 1px solid;
  background: white; 
  color: #222;
}

/* 好了，我开始写简历了 */
`,
      resumeStyleCode: `
/* 给文本加个边框 */
.resume_code {
  overflow: auto;
  width: 100%;
  max-height: 90vh;
  padding: 2vh 2vw;
  box-sizing: border-box;
  font-family: monospace;
  white-space: pre-wrap;
  outline: 0;
}

/* 给文本加样式*/
.md h1 {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  text-align: center;
}

.md h2 {
  display: inline-block;
  padding: 2px 3px;
  font-size: 14px;
  background-color: #009eef;
  color: #fff;
}

blockquote {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  padding: 0 10px;
}

.md p {
  width: 30%;
  margin: 3px;
  font-size: 12px;
  white-space: nowrap;
}

.md h3 {
  display: inline-block;
  margin: 0 10px;
  font-size: 14px;
  font-weight: bold;
}

.md li {
  margin: 10px 15px;
  font-size: 12px;
}
`
    }
  },
  created() {
    this.makeResume();
  },
  methods: {
    async makeResume() {
      await this.showStyle();
      await this.resumeCode();
      await this.resumeStyle();
    },
    showStyle() {
      return new Promise((resolve, reject) => {
        var length = this.finalCode.length;
        var n = 0;
        var timer = setInterval(() => {
          this.showCode = this.finalCode.substring(0, n);
          this.$nextTick(() => {
            // this.$refs.styleEditor.scrollTop = 100000;
            this.$refs.styleEditor.goBottom();
          })
          if(n === length - 1) {
            // 清除定时器
            window.clearInterval(timer);
            resolve();
          } else {
            n += 1;
          }
        }, 5)
      })
    },
    resumeCode() {
      return new Promise((resolve, reject) => {
        var resumeLength = this.workCode.length;
        var num = 0;
        var timer = setInterval(() => {
          this.resumeShowCode = this.workCode.substring(0, num);
          this.$nextTick(() => {
            this.$refs.resumeEditor.goResumeBottom();
          })
          if(num === resumeLength - 1) {
            // 清除定时器
            window.clearInterval(timer);
            resolve();
          } else {
            num += 1;
          }
        }, 5)
      })
    },
    resumeStyle() {
      return new Promise((resolve, reject) => {
        var resumeStyleLength = this.resumeStyleCode.length;
        var m = 0;
        var timer = setInterval(() => {
          this.code = this.resumeStyleCode.substring(0, m);
          this.$nextTick(() => {
            this.$refs.styleEditor.goBottom();
            this.$refs.resumeEditor.goResumeBottom();
          })
          if(m === resumeStyleLength - 1) {
            // 清除定时器
            window.clearInterval(timer);
            resolve();
          } else {
            m += 1;
          }
        }, 5)
      })
    }
  },
  computed: {
    workCode() {
      return '<div class="md">' + md(workText) + '<div>';
    }
  },
  components: {
    styleEditor,
    resumeEditor,
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>