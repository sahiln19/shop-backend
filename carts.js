var connection = require('./connection')

var add = function(req, res) {
    console.log("Received request with body:", req.body);
    var { product_id, quantity, price, user_id, bill_id } = req.body;
    
    if (!product_id || !quantity || !price || !user_id || !bill_id) {
        res.json({ error: "Please provide all required data" }); 
        return;
    }

    // Assuming the column name in the database is correct.
    var query = `INSERT INTO carts (product_id, quantity, price, user_id, bill_id) VALUES (?, ?, ?, ?, ?)`;
    
    connection.DB.query(query, [product_id, quantity, price, user_id, bill_id], (err, result) => {
        if (err) {
            console.log(err);
            res.json({ error: "Error in adding cart" });
        } else {
            res.json({ message: "Cart added successfully" });
        }
    });
};




var select = function(req, res) {
    var query = `SELECT * FROM carts`
    connection.DB.query (query, (err, result) => {
        if (err) {
            res.json({ error: "Error in getting carts" })
        } else {
            res.json(result)
        }
    })
}

var update = function(req, res) {
    var { id } = req.params
    var { product_id, quantity, price, user_id, bill_id } = req.body
    if (!product_id || !quantity || !price || !user_id || !bill_id) {
        res.json({ error: "Please provide all required data" })
    }
    var query = `UPDATE carts SET product_id = ?, quantity = ?, price = ?, user_id = ?, bill_id = ? WHERE id = ?`
    connection.DB.query(query, [product_id, quantity, price, user_id, bill_id, id], (err, result) => {
        if (err) {
            res.json({ error: "Error in updating cart" })
            console.log(err)
        } else {
            res.json({ message: "Cart updated successfully" })
        }
    })
}

var deletcarts = function(req, res) {
    var { id } = req.params
    var query = `DELETE FROM carts WHERE id = ?`
    connection.DB.query(query, [id], (err, result) => {
        if (err) {
            res.json({ error: "Error in deleting cart" })
            console.log(err)
        } else {
            res.json({ message: "Cart deleted successfully" })
        }
    })
}





module.exports.add = add
module.exports.select = select
module.exports.update = update
module.exports.deletcarts = deletcarts