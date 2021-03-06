var mongoose = require('./mongodb');
var Schema = mongoose.Schema;
 
// 声明数据对象
var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    date: {
        type: Date,
        default : Date.now()
    }
});

// 将数据模型暴露出去
module.exports = mongoose.model('User', userSchema);