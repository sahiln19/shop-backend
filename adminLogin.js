var connection = require('./connection');

var add = (req, res) => {   
    var { email, password } = req.body;
    
    if (!email || !password) {
        return res.json('All fields are required');
    }

    
    console.log("Login attempt with email:", email, "and password:", password);

    var query = `SELECT * FROM adminlogin WHERE email = ?`;

    connection.DB.query(query, [email], (err, result) => {
        if (err) {
            res.json('Error in admin login');
            console.log(err);
        } else {
            if (result.length > 0) {
                const admin = result[0];
              
                const isPasswordMatch = password === admin.password;
                if (isPasswordMatch) {
                    res.json('Admin login successful');
                } else {
                    res.json('Invalid email or password');
                }
            } else {
                res.json('Invalid email or password');
            }
        }
    });
}



var update = (req, res) => {
    var { id } = req.params;
    var { email, password } = req.body;
    if (!email || !password) {
        return res.json('All fields are required');
    }

    var query = `UPDATE adminlogin SET email = ?, password = ? WHERE id = ?`;
    connection.DB.query(query, [email, password, id], (err, result) => {
        if (err) {
            res.json('Error in updating admin');
            console.log(err);
        } else {
            res.json('Admin updated successfully');
        }
    });
}

   

module.exports.add = add
module.exports.update = update