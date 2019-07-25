const  db = require('../db')
var Sequelize = require('sequelize');
// 创建表模型
const User = db.defineModel('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    nickname: Sequelize.STRING,
    password: Sequelize.STRING,
    lv:Sequelize.INTEGER(10),
    status: Sequelize.INTEGER
})
// 同步表结构
User.sync()   // 如果表存在 不会刷新结构
// Student.sync({ force: true })   // 如果表存在 会删除表重新建表

module.exports = User