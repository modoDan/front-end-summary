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

3、项目中常用git命令
- $ git fetch  //拉取远程的分支
- $ git branch -a   //查看本地和远程的分支
- $ git checkout xxx   //切换到分支xxx
- $ git pull //更新远程主机某个分支
- $ git merge yyy //本地xxx分支合并到yyy分支上

- $ git status //查看本地自己修改了多少文件
- $ git add . //添加远程不存在的git文件
- $ git commit  -m "what I want told to someone" //提交修改，引号内容为描述
- $ git push  //更新到远程服务器上
- $ git log //查看版本库的状态，提交id--commitId
- $ git reset --hard commitId //commitId提交id
- $ git reflog //查看在所有分支上做的全部改动，每个改动都有一个编号HEAD@{index}
- $ git reset HEAD@{index}
- $ git reset --hard HEAD^ // HEAD表示当前版本
- $ git push -f -u origin xxx //强制提交到xxx分支
4、git后修改了本地文件，如何重新还原未修改状态
  单个文件 ： git checkout + 文件名
  整个目录 ：git checkout .(这个点要加上的)
参考文献：
http://www.ruanyifeng.com/blog/2014/06/git_remote.html
