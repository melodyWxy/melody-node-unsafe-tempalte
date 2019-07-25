const  studentApi = require('./student.js');


function router(req,res){
    // 传过来的req.url格式应该如 '/api/student/getStudentList'
    const url = req.url.split('/')[2];
    console.log(url);
    switch(url){
        case '':
            res.end('THE SERVER IS BY MELODYWXY');
        // case 'user':
        //     User.findAll()
        //     .then(data=>{
        //         res.end(JSON.stringify(data));
        //     })
        case 'student':
            studentApi(req,res);
    }
}

module.exports = router;