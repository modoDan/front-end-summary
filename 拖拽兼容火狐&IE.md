Firefox拖拽必须携带数据：

```
//设置一个全局evId变量
let evId = ''
//拖拽开始
dragstart(e){
 if (navigator.userAgent.indexOf("Firefox") > -1) {
        //判断是否Firefox浏览器,不兼容拖拽
      console.log(e.dataTransfer.setData("imgInfo", e.target.id)); // 火狐拖拽必须携带数据 IE偏偏不支持这个
   }
   evId = e.target.id; // IE不支持，但可以这样,兼容IE拖拽
   ...
 },
 //拖拽结束
 drop(e){
 //接收的数据
 var info = evId;
 }
 
 ```
