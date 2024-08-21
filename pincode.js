var connection = require('./connection');

var add = (req, res) => {
    var { city, area, pincode, state, islive, isdeleted, } = req.body;

    // Check if all required fields are provided
    if (!city || !area || !pincode || !state || islive === undefined || isdeleted === undefined) {
        return res.json('All fields are required');
    }

    var query = `INSERT INTO pincodes (city, area, pincode, state, islive, isdeleted, ) VALUES (?, ?, ?, ?, ?, ?)`;
    connection.DB.query(query, [city, area, pincode, state, islive, isdeleted], (err, result) => {
        if (err) {
            res.json('Error in adding pincode');
            console.log(err);
        } else {
            res.json('Pincode added successfully');
        }
    });
};

var select = (req, res) => {
    var query = `SELECT * FROM pincodes`;
    connection.DB.query(query, (err, result) => {
        if (err) {
            res.json('Error in getting pincodes');
        } else {
            res.json(result);
        }
    });
}
var update = (req, res) => {
    var { id } = req.params; // Get id from the URL parameters
    var { city, area, pincode, state, islive, isdeleted} = req.body; // Get other fields from the body

    // Check if all required fields are provided
    if (!city || !area || !pincode || !state || islive === undefined || isdeleted === undefined || !updated_at) {
        return res.json('All fields are required');
    }

    var query = `UPDATE pincodes SET city = ?, area = ?, pincode = ?, state = ?, islive = ?, isdeleted = ?,  WHERE id = ?`;
    connection.DB.query(query, [city, area, pincode, state, islive, isdeleted, id], (err, result) => {
        if (err) {
            res.json('Error in updating pincode');
            console.log(err);
        } else {
            res.json('Pincode updated successfully');
        }
    });
}
var deletpin = (req, res) => {
    var { id } = req.params;
    var query = `DELETE FROM pincodes WHERE id = ?`;
    connection.DB.query(query, [id], (err, result) => {
        if (err) {
            res.json('Error in deleting pincode');
            console.log(err);
        } else {
            res.json('Pincode deleted successfully');
        }
    });
}

module.exports.add = add;
module.exports.select = select;
module.exports.update = update;
module.exports.deletpin = deletpin;