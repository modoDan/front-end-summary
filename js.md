1、JS 引擎的执行机制event loop 和理解macro-task micro-task

##event loop(1)

按照这种分类方式:JS的执行机制是：

首先判断JS是同步还是异步，同步就进入主进程，异步就进入event table

异步任务在event table中注册函数，当满足触发条件后，被推入event queue

同步任务进入主线程后一直执行，直到主线程空闲时，才会去event queue中查看是否有可执行的异步任务，如果有就推入主进程中

以上三步循环执行，这就是event loop。

##event loop(2)

macro-task(宏任务)：包括整体代码script，setTimeout，setInterval

micro-task(微任务)：Promise，process.nextTick

按照这种分类方式，JS的执行机制是：

- 执行一个宏任务，过程中如果遇到微任务，就将其放到微任务的“事件队列”里

- 当前宏任务执行完成后，会查看微任务的“事件队列”，并将里面全部的微任务依次执行完

- 重复以上2步骤，结合event loop(1) event loop(2)，就是更为准确的JS执行机制了

https://mp.weixin.qq.com/s/8_GqWtndTxHoALhTngWglw
