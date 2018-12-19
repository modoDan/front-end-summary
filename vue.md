1、一个项目如何部分打包

思路：（多页面打包  分模块打包，调整一下配置就行）

#项目分模块

project1 project2不同文件夹代表不同模块

#配置packge.json

"dev-project1":"webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",

"build": "npm run build:project1 && npm run build:project2",

"build-project1": "node build/build.js name=project1",

"build:zip": "npm run build:project1:zip && npm run build:project2:zip"

"build-project1:zip": "node build/build.js name=project1 zip"

参考文献：https://segmentfault.com/a/1190000014571631

2、vue中$emit与$on

　　var Event = new Vue();　　　　　　相当于又new了一个vue实例，Event中含有vue的全部方法；

　　Event.$emit('msg',this.msg);　　发送数据，第一个参数是发送数据的名称，接收时还用这个名字接收，
              第二个参数是这个数据现在的位置；

　　Event.$on('msg',msg =>{　　接收数据，第一个参数是数据的名字，与发送时的名字对应，
              第二个参数是一个方法，要对数据的操作

　　　　/这里是对数据的操作
　　})
