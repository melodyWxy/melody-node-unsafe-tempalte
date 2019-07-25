<!--
 * @Description: melody-node-unsafe-server
 * @Author: melodyWxy
 * @Date: 2019-07-25 17:23:23
 * @LastEditTime: 2019-07-25 19:09:43
 * @LastEditors: Please set LastEditors
 -->


###  melody-node-unsafe-server
    如包名，这是一个不安全的、简陋的、由node原生+ sequelize+ mysql2 实现的一个server；
    它仅仅是三个小时的产物；
    当然，即使再简陋，它也是个server，我们可以用它来辅助开发前端。
    从package.json里可以看到，它仅依赖 sequelize 和 mysql2 两个包，那么，这样设计的目的是：
      
      1 这是一个做web应用安全测试的简陋服务器，在自攻自守这个服务器（甚至包括客户端=>xss和csrf）的过程中，迈入web安全攻防的大门。
      2 流程： 确认攻击目的，制定方案，模拟场景，实施方案。
      因此，我们不应该仅仅将它放在本地，或许开一个服务器将它挂上去，能够得到能好的模拟体验。


###  本地开发测试用 
    以下：如果你只是想跑这个demo，步骤 2和3 都可以省掉，直接运行。

    如果仅仅是将它作为本地服务器，模拟全流程实现接口，那么，你只需要创建一个数据库（在下载安装mysql之后），然后：
    1  修改  service/db.js line 4  的第一、二、三个参数 （将’test‘替换为你的database name，第二个是你数据库的用户名，一般默认为root，第三个是你的数据库管理密码）；
    2  仿照 service/modules/* 来定制你的表； 
    3  仿照 router/* 来实现你的接口（这里的文件与service/modules里的文件一一对应； 

###  优化方向
   如果想对它进行优化，那么以下方向可以作为参考：
      1  异常容灾 （catch掉所有可能的错误，不要让服务挂掉）；
      2  库表设计与操作优化（你需要掌握数据库的有关知识，并且对sequelize插件进行一个深度的学习）；
      3  目录优化；
      4  路由（api）优化；
      5  代码优化