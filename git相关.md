1、合并分支到master上
- 首先切换到master分支上

  git  checkout master
- 如果是多人开发的话 需要把远程master上的代码pull下来

  git pull origin master

- 然后我们把xxx分支的代码合并到master上

  git  merge xxx
- 然后查看状态并提交到远程仓库

  git status
  
  git push origin master
  
  2、"npm ERR! Error: EPERM: operation not permitted"问题解决
  
  重点是：operation not permitted  想到应该是windows系统下的权限错误。
  
  解决方法：   使用win+x,选择命令提示符（管理员），在里面运行命令就好了。
  
  https://blog.csdn.net/fjnjxr/article/details/53158204
