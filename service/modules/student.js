const  db = require('../db')
var Sequelize = require('sequelize');
// 创建表模型
const Student = db.defineModel('student', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    status: Sequelize.INTEGER
})
// 同步表结构
Student.sync()   // 如果表存在 不会刷新结构
// Student.sync({ force: true })   // 如果表存在 会删除表重新建表
// 查找所有用户
// .then(
//     ()=>{
//         Student.findAll().then(res => {
//             console.log("All students:",res);
//         })
//     }
// )

module.exports = Student