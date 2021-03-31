const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const qs = require('querystring')
const User = require('./users');

// 连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userlist');

app = express()
app.use(cors())
// 暴力请求跨域
// body用json处理，前端用json字符串进行提交
app.use(bodyParser.json());

/*插入数据*/
function insert(name, psw) {
    //数据格式
    var user = new User({
        username: name,
        password: psw,
    });
    user.save((err, res) => {
        if (err) {
            return false;
        }
        console.log(res);
        return true
    })
}

app.post('/api/user', function (req, res) {
    const user = qs.parse(req.body.data)
    console.log(user)
    User.findOne({ username: user.name }, function (err, data) {
        if (err) {
            return res.send('出错了')
        } else {
            if (data.length) {
                return res.send('用户名已被注册');
            } else {
                var result = insert(user.name, user.password)
                if(!result){return res.send('注册出错了')}
                return res.send('注册成功了')
            }
        }
    });
})

app.listen(8000, () => {
    console.log('启动成功了');
})