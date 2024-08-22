var mysql2 = require('mysql2');
var data =  {
    database :'MYSHOP',
    user : 'root',
    password :'' ,
    host : 'localhost',
    port : 3306
}

var DB = mysql2.createConnection(data);
DB.connect((err)=>{
    if(err){
        console.log('Error in connection');
        console.log(err);
    }else{
        console.log('Connected to database');
    }
})
module.exports.DB = DB;