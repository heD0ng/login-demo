本demo只是在自己做登陆注册时用的小demo，记录一下过程，代码可用，流程无问题，但是需要结合个人需要进行适当改变；
注意事项：
server.js
    new User({}):
        需要注意与user.js中的key对应，不然会传值出问题
    res.send(): 
        出现报错：Can't set headers after they are sent to client.
        需要进行前面加上return，不然代码会重复运行。

mongodb.js
    mongoose.connect()：需要注意后面要设置。

MongoDB安装：
    出现了系统访问错误，是访问权限问题。
    解决：win键搜索cmd，右键以管理员形式打开，输入net start(stop) MongoDB
