var connection = require('./connection');

var add = (req,res)=>{
   var {title , start_date , end_date, product_id, photo} = req.body;
    if(!title || !start_date || !end_date || !product_id || !photo){
         return res.json('All fields are required');
    }
    var query = `INSERT INTO sliders (title , start_date , end_date, product_id, photo) VALUES (?,?,?,?,?)`;
    connection.DB.query(query,[title , start_date , end_date, product_id, photo],(err,result)=>{
        if(err){
            res.json('Error in adding sliders');
            console.log(err);
        }else{
            res.json('Sliders added successfully');
        }
    });
}

var select = (req,res)=>{
    var query = `SELECT * FROM sliders`;
    connection.DB.query(query,(err,result)=>{
        if(err){
            res.json('Error in getting sliders');
        }else{
            res.json(result);
        }
    });
}

var update = (req,res)=>{
  var {id} = req.params;
    var {title , start_date , end_date, product_id, photo} = req.body;
    if(!title || !start_date || !end_date || !product_id || !photo){
         return res.json('All fields are required');
    }
    var query = `UPDATE sliders SET title = ?, start_date = ?, end_date = ?, product_id = ?, photo = ? WHERE id = ?`;
    connection.DB.query(query,[title , start_date , end_date, product_id, photo, id],(err,result)=>{
        if(err){
            res.json('Error in updating sliders');
            console.log(err);
        }else{
            res.json('Sliders updated successfully');
        }
    });
}

var deletesli = (req,res)=>{
    var {id} = req.params;
    var query = `DELETE FROM sliders WHERE id = ?`;
    connection.DB.query(query,[id],(err,result)=>{
        if(err){
            res.json('Error in deleting sliders');
            console.log(err);
        }else{
            res.json('Sliders deleted successfully');
        }
    });
}

module.exports.add = add
module.exports.select = select
module.exports.update = update
module.exports.deletesli = deletesli