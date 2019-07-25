const dbs = require('../service/index.js');
const { Student } = dbs;


// /api/student/getStudentList
function getStudentList(res){
    Student.findAll()
    .then(data=>{
        const result = JSON.stringify(data);
        res.write(result);
        console.log(result,'xx')
        res.end(); 
    })
}

// /api/student/addStudent
function addStudent(params,res){
    const {name,age} = params;
    console.log(name,33);
    Student.create({
        name,
        age,
        status: 1
    })
    .then(data=>{
        console.log(data,4);
        res.write(JSON.stringify(data));
        res.end();
    })
}
// /api/student/postStudentById
function postStudentById(id,res){
    Student.findOne({
        attrbutes:{
            exclude:['password']
        },
        where:{
            id
        }
    })
    .then(data=>{
        const result = JSON.stringify(data);
        console.log(result,'post');
        res.write(result);
        res.end();
    })
}

// /api/student =>统一处理；
function studentApi(req,res){
   const url = req.url.substring(4);
   console.log(url);
   if(url==='/student/getStudentList'){
       getStudentList(res);
   }
   if(url==='/student/postStudentById'){
       let data = '';
       req.on('data',chunk => data+=chunk)
       req.on('end',()=>{
            // console.log("id:",id);
            const dataStr = data.toString();
            const dataObj = JSON.parse(dataStr);
            postStudentById(dataObj.id,res);
       })
   }
   if(url === '/student/addStudent'){
       let data = ''; 
       req.on('data',chunk=>data+=chunk)
       req.on('end',()=>{
           const dataStr = data.toString();
           const dataObj = JSON.parse(dataStr);
           addStudent(dataObj,res);
       })
   }
}

module.exports = studentApi;