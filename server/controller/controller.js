var Userdb = require('../model/model')

// create and save new user
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}


//retrieve and return all users/ retrive and return  a signle user
exports.find = (req, res) => {

}

//update new user identified by user id
exports.update = (req, res) => {

}

//delete user identified by user id
exports.delete = (req, res) => {

}