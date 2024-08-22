var connection = require('./connection');
//
var add = (req, res) => {
    var { category_id, title, detail, price, stock, weight, size, photo, islive, isdeleted } = req.body;
    console.log("Received request with body:", req.body);

    if (!category_id || !title || !detail || !price || !photo || !stock || !weight || !size || islive === undefined || isdeleted === undefined) {
        return res.json('All fields are required');
    }

    var query = `INSERT INTO products (category_id, title, detail, price, stock, weight, size, photo, islive, isdeleted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.DB.query(query, [category_id, title, detail, price, stock, weight, size, photo, islive, isdeleted], (err, result) => {
        if (err) {
            res.json('Error in adding product');
            console.log(err);
        } else {
            res.json('Product added successfully');
        }
    });
}


let select  = (req, res) => {
    connection.DB.query('SELECT * FROM products', (err, result) => {
        if (err) {
            res.json('Error in fetching products');
            console.log(err);
        } else {
            res.json(result);
        }
    });
}
let update = (req, res) => {
    var id = req.params.id;
    var { category_id, title, detail, price, stock, weight, size, photo, islive,isdeleted, } = req.body;
    if (!category_id || !title || !detail || !price || !photo || !stock || !weight || !size || islive === undefined || isdeleted === undefined ) {
        return res.json('All fields are required');
    }
    var query = `UPDATE products SET category_id = ?, title = ?, detail = ?, price = ?, stock = ?, weight = ?, size = ?, photo = ?, islive = ?, isdeleted = ?, WHERE id = ?`;
    connection.DB.query(query, [category_id, title, detail, price, stock, weight, size, photo, islive,isdeleted,, id], (err, result) => {
        if (err) {
            res.json('Error in updating product');
            console.log(err);
        }
        else {
            res.json('Product updated successfully');
        }
    }
    );
}
let deletpro = (req, res) => {
    var id = req.params.id;
    connection.DB.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
        if (err) {
            res.json('Error in deleting product');
            console.log(err);
        } else {
            res.json('Product deleted successfully');
        }
    });
}


module.exports.add = add 
module.exports.select = select
module.exports.update = update
module.exports.deletpro = deletpro