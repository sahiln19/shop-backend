var connection = require('./connection');

var add = (req, res) => {
    var { email,mobile,password,created_at,islive,isdeleted } = req.body;
    if ( !email || !mobile || !password || !created_at || islive === undefined || isdeleted === undefined) {
        return res.json('All fields are required');
    }
    var query = `INSERT INTO users (email,mobile,password,created_at,islive,isdeleted) VALUES (?,?,?,?,?,?)`;
    connection.DB.query(query, [email,mobile,password,created_at,islive,isdeleted], (err, result) => {
        if (err) {
            res.json('Error in adding users');
            console.log(err);
        } else {
            res.json('Users added successfully');
        }
    });
}

var select = (req, res) => {
    var query = `SELECT * FROM users`;
    connection.DB.query(query, (err, result) => {
        if (err) {
            res.json('Error in getting users');
        } else {
            res.json(result);
        }
    });
}

var update = (req, res) => {
    var { id } = req.params;
    var { email,mobile,password,created_at,islive,isdeleted } = req.body;
    if (!email || !mobile || !password || !created_at || islive === undefined || isdeleted === undefined) {
        return res.json('All fields are required');
    }
    var query = `UPDATE users SET email = ?, mobile = ?, password = ?, created_at = ?, islive = ?, isdeleted = ? WHERE id = ?`;
    connection.DB.query(query, [email,mobile,password,created_at,islive,isdeleted, id], (err, result) => {
        if (err) {
            res.json('Error in updating users');
            console.log(err);
        } else {
            res.json('Users updated successfully');
        }
    });
}

var deleteuser = (req, res) => {
    var { id } = req.params;
    var query = `DELETE FROM users WHERE id = ?`;
    connection.DB.query(query, [id], (err, result) => {
        if (err) {
            res.json('Error in deleting users');
            console.log(err);
        } else {
            res.json('Users deleted successfully');
        }
    });
}



module.exports.add = add 
module.exports.select = select 
module.exports.update = update
module.exports.deleteuser = deleteuser