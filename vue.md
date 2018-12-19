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
