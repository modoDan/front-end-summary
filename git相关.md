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
