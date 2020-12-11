(function(n){function e(e){for(var t,s,a=e[0],l=e[1],c=e[2],d=0,f=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var n,e=0;e<i.length;e++){for(var r=i[e],t=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(t=!1)}t&&(i.splice(e--,1),n=s(s.s=r[0]))}return n}var t={},o={app:0},i=[];function s(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=n,s.c=t,s.d=function(n,e,r){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)s.d(r,t,function(e){return n[e]}.bind(null,t));return r},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(n,e,r){n.exports=r("56d7")},"56d7":function(n,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),o=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{attrs:{id:"app"}},[r("style-editor",{ref:"styleEditor",attrs:{showCode:n.showCode,code:n.code}}),r("resume-editor",{ref:"resumeEditor",attrs:{resumeShowCode:n.resumeShowCode,code:n.code}})],1)},i=[],s=(r("d3b7"),r("96cf"),r("1da1")),a=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"style_editor"},[r("pre",{ref:"content",staticClass:"final_code",domProps:{innerHTML:n._s(n.finalShowCode)}}),r("div",{staticClass:"style",domProps:{innerHTML:n._s(n.styleCode)}})])},l=[],c=r("c197"),u=r.n(c),d=(r("0b16"),{name:"styleEditor",props:["showCode","code"],computed:{finalShowCode:function(){return u.a.highlight(this.showCode+this.code,u.a.languages.css,"css")},styleCode:function(){return"<style>"+this.showCode+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.content.scrollTop=1e5}}}),f=d,p=r("2877"),h=Object(p["a"])(f,a,l,!1,null,"ca8b1092",null),m=h.exports,g=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"resume_editor"},[r("div",{ref:"resume",staticClass:"resume_code",domProps:{innerHTML:n._s(n.resumeShowCode)}}),r("div",{staticClass:"resume_style",domProps:{innerHTML:n._s(n.styleCode)}})])},x=[],w={name:"resumeEditor",props:["resumeShowCode","code"],computed:{styleCode:function(){return"<style>"+this.code+"</style>"}},methods:{goResumeBottom:function(){this.$refs.resume.scrollTop=1e5}}},v=w,b=Object(p["a"])(v,g,x,!1,null,"0598eae2",null),y=b.exports,C=r("8ddc"),S=r.n(C),_="# 个人简历\r\n\r\n## 基本信息\r\n\r\n> 姓名：李舒欣   \r\n\r\n> 性别：女   \r\n\r\n> 生日：1997-03\r\n\r\n> 手机：13160898450   \r\n\r\n> 邮箱：2921569274@qq.com   \r\n\r\n> 学校：广州涉外经济职业技术学院\r\n\r\n## 求职意向\r\n\r\n> 期望职位：初级前端工程师   \r\n\r\n> 期望薪资：5k~6k\r\n\r\n> 到岗时间: 一周内\r\n\r\n## 职业技能\r\n\r\n+ 能够使用HTML、CSS还原设计搞，掌握DIV+CSS基本页面布局、flex弹性盒模型布局，以及百分比、rem、vw等移动端适配布局。\r\n+ 拥有良好的JavaScript基础，理解作用域\\作用域链、预编译、闭包、立即执行函数、原型\\原型链、继承。\r\n+ 熟悉Vue.js框架，熟悉使用Vuecli进行组件模块化开发，能够使用vue-cli脚手架搭建基础项目。\r\n+ 掌握webpack打包工具的使用。\r\n+ 掌握bootstrap框架的使用。\r\n+ 掌握git、github进行项目代码管理。\r\n+ 掌握npm包管理器的使用。\r\n+ 了解Sass预处理器的使用。\r\n+ 了解axios的使用。\r\n\r\n## 项目经验\r\n\r\n### PC端橘易网页\r\n\r\n* 项目预览链接: https://xinxin52077.github.io/juyiwang/juyi/dist/index.html\r\n* 描述：模仿橘易门店系统，主要模拟实现了页面的用户登录与注册效果。\r\n* 内容：技术栈是vue；主要基于HTML5（DIV+CSS+JS）以及根据网页的效果图来实现此项目；实现了注册和登录主要组件的编写；利用正则表达式来实现手机号码验证、以及使用data中的数据来验证密码是否正确。\r\n* 源码链接：https://github.com/xinxin52077/juyiwang\r\n\r\n### 简历生成器\r\n\r\n* 项目预览链接: https://xinxin52077.github.io/resume/resume/dist/index.html\r\n* 描述：基于Vue.js实现的一个会动的简历模板生成器。\r\n* 内容：技术栈是vue；主要基于HTML5（DIV+CSS+JS）来实现此项目；实现了文本输出组件、样式输出主要组件的编写；利用markdown插件和raw-loader插件来引入外部.txt文件（个人简历文本内容）。主要使用async和await，以及Promise对象和定时器，来控制整个项目页面内容的输出。\r\n* 源码链接：https://github.com/xinxin52077/jianli\r\n\r\n### 移动端去哪儿网\r\n\r\n* 项目预览链接: https://xinxin52077.github.io/Travel/travel/dist/index.html\r\n* 描述：基于Vue.js实现的仿移动端去哪儿网景点的移动端项目模实战开发。\r\n* 内容：技术栈是vue；实现了定位城市选择、热销推荐、景区详情、周末去哪玩等主要组件的编写；使用了axios来请求本地json数据；利用vuex对一些数据进行状态管理；使用better-scroll来实现页面滑动效果。使用keep-alive提高了用户体验，减少重复的ajax请求。\r\n* 源码连接：https://github.com/xinxin52077/Travel\r\n\r\n### 移动端点餐系统\r\n\r\n* 项目预览链接: https://xinxin52077.github.io/eleme/eleme/dist/index.html\r\n* 描述：基于Vue.js实现的仿饿了么点餐商家详情页的移动端项目实战开发。一个商家点餐系统移动网站，主要实现了商品选择、加入购物车、购物车商品展示、去结算等功能。\r\n* 内容：技术栈是vue；实现了商品、评论、商家、购物车等主要组件的编写；使用了axios来请求本地json数据；使用better-scroll来实现页面滑动效果。\r\n* 源码链接: https://github.com/xinxin52077/eleme\r\n\r\n### 小程序--京东商城\r\n\r\n* 描述：基于微信开发者实现的仿京东商城小程序的小程序端项目实战开发。实现了用户微信授权、商品分类、商品详情、加入购物车、去结算等主要功能。\r\n* 内容：实现了商品分类、商品详情、加入购物车等主要组件的编写。\r\n* 源码链接: https://github.com/xinxin52077/jingdong-xcx\r\n\r\n\r\n## 教育经历\r\n\r\n### 广州涉外经济职业技术学院   大学专科   2016至2019年\r\n\r\n## 工作经历\r\n\r\n### 2019/3 - 2019/9  广州辰龙教育科技有限公司 网络编辑\r\n+ 主要负责：根据网站业务规划内容，确定网站主导思想和主题方向，并完成内容编写与发布。\r\n\r\n## 自我评价\r\n\r\n+ Github:https://github.com/xinxin52077\r\n+ 热爱前端开发，乐于钻研学习新技术。\r\n+ 喜欢用最扎实的代码，写出合理的页面。\r\n+ 喜欢阅读技术社区文章，在知乎上会发表前端技术文章。",k=S.a.markdown.toHTML,j={name:"app",data:function(){return{showCode:"",resumeShowCode:"",code:"",finalCode:"\n/*\n * 你好，我是欣欣\n * 找工作最重要的就是准备好一份简历\n * 现在我就来做一份简历！\n *\n * 好了，我要开始我的表演了。\n */\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all 1s;\n}\n\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: white;\n  background-color: rgb(63, 82, 99);\n}\n\n/* 给文本加个边框 */\n.final_code {\n  overflow: auto;\n  width: 48%;\n  max-height: 90vh;\n  padding: 1vh 0.5vw;\n  margin: 3vh 0.5vw;\n  background-color: rgb(48, 48, 48);\n  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\n  border: 1px solid #ccc;\n  font-size: 14px;\n  font-family: monospace;\n  white-space: pre-wrap;\n  outline: 0;\n}\n\n/* 代码高亮 */\n.comment       { color: #857F6B; font-style: italic; }\n.selector      { color: #E69F0F; }\n.selector .key { color: #64D5EA; }\n.key           { color: #64D5EA; }\n.value         { color: #BE84F2; }\n.value.px      { color: #F92772; }\n\n/* 加点 3D 效果呗 */\nbody {\n  perspective: 1000px;\n}\n\n.final_code {\n  transform: rotateY(10deg);\n  transform-origin: left;\n}\n\n/* 把这个框框移到右边先 */\n.final_code {\n  height: 45vh;\n  transform: translateX(100%) rotateY(-10deg);\n  transform-origin: right;\n}\n\n.style_editor {\n  padding: 0 1vw 0 30%;\n}\n\n.final_code {\n  height: 90vh;\n  transform: translateX(100%) rotateY(-10deg);\n  transform-origin: right;\n}\n\n/* 接下来先准备一个框 */\n.resume_editor {\n  position: fixed; \n  left: 0; \n  top: 0;\n  margin: .5em;\n  width: 45vw; \n  height: 90vh;\n  border: 1px solid;\n  background: white; \n  color: #222;\n}\n\n/* 好了，我开始写简历了 */\n",resumeStyleCode:"\n/* 给文本加个边框 */\n.resume_code {\n  overflow: auto;\n  width: 100%;\n  max-height: 90vh;\n  padding: 2vh 2vw;\n  box-sizing: border-box;\n  font-family: monospace;\n  white-space: pre-wrap;\n  outline: 0;\n}\n\n/* 给文本加样式*/\n.md h1 {\n  font-size: 18px;\n  color: #000;\n  font-weight: bold;\n  text-align: center;\n}\n\n.md h2 {\n  display: inline-block;\n  padding: 2px 3px;\n  font-size: 14px;\n  background-color: #009eef;\n  color: #fff;\n}\n\nblockquote {\n  display: flex;\n  flex-flow: row wrap;\n  align-content: flex-start;\n  padding: 0 10px;\n}\n\n.md p {\n  width: 30%;\n  margin: 3px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.md h3 {\n  display: inline-block;\n  margin: 0 10px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.md li {\n  margin: 10px 15px;\n  font-size: 12px;\n}\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.showStyle();case 2:return e.next=4,n.resumeCode();case 4:return e.next=6,n.resumeStyle();case 6:case"end":return e.stop()}}),e)})))()},showStyle:function(){var n=this;return new Promise((function(e,r){var t=n.finalCode.length,o=0,i=setInterval((function(){n.showCode=n.finalCode.substring(0,o),n.$nextTick((function(){n.$refs.styleEditor.goBottom()})),o===t-1?(window.clearInterval(i),e()):o+=1}),5)}))},resumeCode:function(){var n=this;return new Promise((function(e,r){var t=n.workCode.length,o=0,i=setInterval((function(){n.resumeShowCode=n.workCode.substring(0,o),n.$nextTick((function(){n.$refs.resumeEditor.goResumeBottom()})),o===t-1?(window.clearInterval(i),e()):o+=1}),5)}))},resumeStyle:function(){var n=this;return new Promise((function(e,r){var t=n.resumeStyleCode.length,o=0,i=setInterval((function(){n.code=n.resumeStyleCode.substring(0,o),n.$nextTick((function(){n.$refs.styleEditor.goBottom(),n.$refs.resumeEditor.goResumeBottom()})),o===t-1?(window.clearInterval(i),e()):o+=1}),5)}))}},computed:{workCode:function(){return'<div class="md">'+k(_)+"<div>"}},components:{styleEditor:m,resumeEditor:y}},T=j,E=(r("7b08"),Object(p["a"])(T,o,i,!1,null,"f63a410e",null)),P=E.exports;r("b059");t["a"].config.productionTip=!1,new t["a"]({render:function(n){return n(P)}}).$mount("#app")},"5df9":function(n,e,r){},"7b08":function(n,e,r){"use strict";var t=r("5df9"),o=r.n(t);o.a},b059:function(n,e,r){}});
//# sourceMappingURL=app.34015c78.js.map