var connection = require('./connection');

var add = (req, res) => {
    var { title, detail, photo, islive, isdeleted } = req.body;

    if (!title || !detail || !photo || islive === undefined || isdeleted === undefined) {
        return res.json('All fields are required');
    }

    var query = `INSERT INTO categories (title, detail, photo, islive, isdeleted) VALUES (?, ?, ?, ?, ?)`;
    
    connection.DB.query(query, [title, detail, photo, islive, isdeleted], (err, result) => {
        if (err) {
            res.json('Error in adding category');
            console.log(err);
        } else {
            res.json('Category added successfully');
        }
    });
};

var select = (req,res)=>{
    var query = `SELECT * FROM categories`;
    connection.DB.query(query,(err,result)=>{
        if(err){
            res.json('Error in getting categories');
        }else{
            res.json(result);
        }
    })
}

var update = (req, res) => {
    var { id } = req.params; // Get id from the URL parameters
    var { title, detail, photo, islive, isdeleted } = req.body; // Get other fields from the body

    // Check if all required fields are provided
    if (!title || !detail || !photo || islive === undefined || isdeleted === undefined) {
        return res.json('All fields are required');
    }

    var query = `UPDATE categories SET title = ?, detail = ?, photo = ?, islive = ?, isdeleted = ? WHERE id = ?`;
    connection.DB.query(query, [title, detail, photo, islive, isdeleted, id], (err, result) => {
        if (err) {
            res.json('Error in updating category');
            console.log(err);
        } else {
            res.json('Category updated successfully');
        }
    });
};

const deletcat = (req, res) => {
    var { id } = req.params;
    var query = `DELETE FROM categories WHERE id = ?`;
    connection.DB.query(query, [id], (err, result) => {
        if (err) {
            res.json('Error in deleting category');
            console.log(err);
        } else {
            res.json('Category deleted successfully');
        }
    });
}

module.exports.add = add;
module.exports.select = select;  
module.exports.update = update;
module.exports.deletcat = deletcat;