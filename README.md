项目参考了[notepad](https://github.com/lin-xin/notepad)，非常感谢。
用flex布局页面，简化了内容，当做练手vue项目
项目开发过程中，遇到的问题及知识点全部记录在下方
---

## vue2 + vuex + flex + localStorage 本地记事本
> 项目使用了[vue cli](https://github.com/vuejs/vue-cli) 脚手架，webpack-simple模板,fontawesome图标

### 在线预览及本地安装
[点击预览](http://vue-notebook-test.520world.com)

```
//进入文件夹,执行以下命令安装
npm install
npm run dev
```

![演示gif](http://520world.com/wp-content/uploads/2017/02/notebook.gif)

### 功能
类似vue官网的[TodoMVC](https://cn.vuejs.org/v2/examples/todomvc.html)

- 增删事件
- 本地化存储


	

搜索及编辑功能还未完成，后续会再用上rouer

### 安装 normalize.css模块
> css reset的一种方案

	配置读取css和字体文件
	npm install style-loader --save-dev
	npm install css-loader --save-dev
	npm install file-loader --save-dev

	注意: webpack-simple模板中，需要对引入css路径进行配置	
	在 webpack.config.js 中的 loaders 数组加入以下配置
	{
	    test: /\\.css$/,
	    loader: "style!css"
	},
	{
	    test: /\\.(eot|woff|woff2|ttf)([\\?]?.*)$/,
	    loader: "file"
	}

	npm安装normalize.css
	npm install normalize.css --save

	在main.js中 
	import 'normalize.css'

### 安装字体库

[vue-awesome](https://github.com/Justineo/vue-awesome)	
[fontawesome](http://www.fontawesome.com.cn/)	

### 非父子组件通信
> 在开始开发的过程中，没用使用vuex状态管理，遇到了非父子组件通信的问题，可以使用vue2的bus

[vue bus](https://cn.vuejs.org/v2/guide/components.html#非父子组件通信)	

	新建一个bus.js

	import Vue from 'vue'
	export default new Vue()

	使用 $emit 监听   $on响应

	Bus.$on('transmit', function(tt) {
	   	this.completedClick()
    });
	注意: 以上的this是function(){} 中的this

    Bus.$on('transmit', () => this.completedClick());
    使用短语法 this指向bus

### methods中的方法相互调用

用绑定this的方法，如:
this.roundNum = this.$options.methods.rnd.bind(this)(10,100);
或
[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### 事件处理器
[事件处理器](https://cn.vuejs.org/v2/guide/events.html)

	① 监听事件，直接触发 JavaScript代码
	② 方法事件处理器，触发函数，可调用原生DOM事件
	③ 内联处理器，绑定方法并给予参数，此方法中，可再添加$event参数，访问原生DOM事件对象，如target、preventDefault

vue的事件处理器作方方法，其实和js事件处理程序是一样的，以上
①就是HTML事件处理程序，②是DOM0别事件处理程序，③是DOM2级事件处理程序，写的时候道理和我们平时在html在添加事件是一个道理

[事件处理器参考链接](https://cn.vuejs.org/v2/guide/events.html)

### 外部访问localhost
> 在调试的时候，除了chrome的模拟器，还需要在真实机器上测试,在手机上访问开发电脑上的localhost

第一步:接入相同的网络环境，获取ip地址

win: `ipconfig`
mac: `ifconfig`

第二步:
	
在webpack配置中，在devServer中添加host: '0.0.0.0'，在启动的时候会打开http://0.0.0.0:8080
[DevDocs host - Webpack 2 - DevServer](http://devdocs.io/webpack~2/configuration/dev-server/index#devserver-host-cli-only)

### FAQ及其他vue内容

单个.vue组件中的 
```
export default {
	name:''
}
```
其中的name主要给递归组件用


npm run build  执行错误
```
ERROR in build.js from UglifyJs
SyntaxError: Unexpected token: name (warn) [./~/vue-awesome/util.js:3,0][build.js:24054,4]
```
参考配置解决[vue-awesome](https://github.com/Justineo/vue-awesome)

[es6预览](http://javascript.ruanyifeng.com/advanced/ecmascript6.html)

[基于 Vue 2.0 和 Material Desigin 的 UI 组件库](https://museui.github.io)

[Mint UI 基于 Vue.js 的移动端组件库](http://mint-ui.github.io/)

[音乐视频等api](https://api.imjad.cn/)
	
