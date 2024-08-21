var connection = require('./connection');

var add = function(req,res){
    var {user_id, billdate, amount, paymentmode, paymentstatus, fullname , address1, address2, city, pincode, mobile, remarks, orderstatus} = req.body;
    if(!user_id || !billdate || !amount || !paymentmode || !paymentstatus || !fullname || !address1 || !address2 || !city || !pincode || !mobile || !remarks || !orderstatus){
        res.json({error: 'yes', message: 'Please provide all details'});
        return;
    }
var query = `insert into bills(user_id, billdate, amount, paymentmode, paymentstatus, fullname, address1, address2, city, pincode, mobile, remarks, orderstatus) values('${user_id}', '${billdate}', '${amount}', '${paymentmode}', '${paymentstatus}', '${fullname}', '${address1}', '${address2}', '${city}', '${pincode}', '${mobile}', '${remarks}', '${orderstatus}')`;
   connection.DB.query(query, function(error, results, fields){
         if(error) 
         {
         res.json({error: 'no', message: 'Bill added successfully'});
        }
         else{
             res.json({error: 'yes', message: 'Failed to add bill'});
         }
    })
}

var select = function(req,res){
    var query = `select * from bills`;
    connection.DB.query (query, function(error, results, fields){
        if(error){
            res.json({error: 'yes', message: 'Error in getting bills'});
        }else{
            res.json(results);
        }
    })
}

var update = function(req,res){
    var {id} = req.params;
    var {user_id, billdate, amount, paymentmode, paymentstatus, fullname , address1, address2, city, pincode, mobile, remarks, orderstatus} = req.body;
    if(!user_id || !billdate || !amount || !paymentmode || !paymentstatus || !fullname || !address1 || !address2 || !city || !pincode || !mobile || !remarks || !orderstatus){
        res.json({error: 'yes', message: 'Please provide all details'});
        return;
    }
    var query = `update bills set user_id = '${user_id}', billdate = '${billdate}', amount = '${amount}', paymentmode = '${paymentmode}', paymentstatus = '${paymentstatus}', fullname = '${fullname}', address1 = '${address1}', address2 = '${address2}', city = '${city}', pincode = '${pincode}', mobile = '${mobile}', remarks = '${remarks}', orderstatus = '${orderstatus}' where id = ${id}`;
    connection.DB.query(query, function(error, results, fields){
        if(error){
            res.json({error: 'yes', message: 'Error in updating bill'});
        }else{
            res.json({error: 'no', message: 'Bill updated successfully'});
        }
    })
}

var deletebill = function(req,res){
    var {id} = req.params;
    var query = `delete from bills where id = ${id}`;
    connection.DB.query(query, function(error, results, fields){
        if(error){
            res.json({error: 'yes', message: 'Error in deleting bill'});
        }else{
            res.json({error: 'no', message: 'Bill deleted successfully'});
        }
    })
}


module.exports.add = add 
module.exports.select = select
module.exports.update = update
module.exports.deletebill = deletebill
