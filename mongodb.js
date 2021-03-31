const mongoose = require('mongoose');

//数据库地址
mongoose.connect('mongodb://localhost:27017/userlist', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true);

var db = mongoose.connection;

// 连接成功
db.on('open', function () {
    console.log('MongoDB数据库连接成功');
});
// 连接失败
db.on('error', function () {
    console.log('MongoDB数据库连接失败');
})

module.exports = mongoose;