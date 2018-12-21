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

`var Event = new Vue();`　　

//相当于又new了一个vue实例，Event中含有vue的全部方法；

`Event.$emit('msg',this.msg);　`　

//发送数据，第一个参数是发送数据的名称，接收时还用这个名字接收，第二个参数是这个数据现在的位置；

`Event.$on('msg',msg =>{　　
    //这里是对数据的操作
})`

//接收数据，第一个参数是数据的名字，与发送时的名字对应，第二个参数是一个方法，要对数据的操作


3、解决Vue打包后背景图片路径错误问题

build出来的index.html文件中的默认资源引用都是绝对路径，也就是相对于根目录的绝对路径；但是项目如果部署到线上也不一定是在根目录里呀，所以这种默认相对于根目录的绝对路径肯定是不实用的；

我们的根目录下有个config文件夹，下面有个index.js，我们把build对象下的assetsPublicPath的值改为 ‘./’,代表当前路径，（之前的’/’,表示根目录）
这样我们就解决了index.html中资源引用的问题，由原来的绝对路径改为了相对路径 

 npm run dev : 提供一个开发的环境，自动热更新，资源使用绝对路径，所以可以正常看到背景图片。（项目所在目录，本地）

 npm run build : 打包项目，资源使用相对路径，所以会出现路径错误问题。（此时根目录已变，得用相对路径）
 
 如何引入静态资源得图片且不会编译？？
 
 `<img src="static/images/nodata-icon.png">` //html标签，他的路径是由index.html开始访问的
` background:url('/static/images/nodata-icon.png') no-repeat;` // 这个必须用绝对路径

图片在vue中引入 路径报错??

`<img :src="avatar"/>
import avatar from '@/assets/logo.png'`

4、keep-alive用法以及activated,deactivated生命周期的讲解

#keep-alive

把所有的页面都基于缓存了不用发起第二次请求，

1).include和exclude表示那些组件需要缓存那些组件不需要缓存

`
<keep-alive :include="tagsList">
    <router-view></router-view>
</keep-alive>
`

2).router文件中设置

`
meta: {
    keepAlive: true // 需要被缓存
}
 <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
 </keep-alive>
`


  当引入keep-alive 的时候，页面第一次进入，钩子的触发顺序created-> mounted-> activated，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated。再次进入就不在重新解析而是读取内存中的数据
 
 #activated 激活
 
 `activated: function () {
     // 获取数据
  }`
  
 #deactivated 失活
 
 `
 deactivated: function () {}
 `
 
参考文献:
    https://blog.csdn.net/qq_32786873/article/details/71171713  https://blog.csdn.net/buddha_itxiong/article/details/81069087
    
5、vuex中state的mapState 辅助函数用法

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性

`import { mapState } from 'vuex'`

`computed: {`

    ` ...mapState({
        loginInfo: 'loginInfo',
        circle: state => state.loginStatus,
        countAlias: 'loginStatus',
        countPlusLocalState (state) {
            return state.loginStatus + this.title
        }
    }),
    
    ...mapState([
        'loginInfo',
        'loginStatus',
    ])
    `
  `},
  `
