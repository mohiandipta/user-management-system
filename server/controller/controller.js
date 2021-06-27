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
    if (!user) {
        console.log('the user can not be created')
    }
    res.redirect('/add-user');
}


//retrieve and return all users/ retrive and return  a signle user
exports.find = async (req, res) => {
    let user = await Userdb.find()
    res.send(user)
}

//retriving user by user id
exports.finById = async (req, res) => {
    const id = req.params.id
    let user = await Userdb.findById(id)
    if (!user) {
        res.status(500).json({ message: 'user with the given id was not found' })
    }
    res.send(user)
}

//update new user identified by user id
exports.update = async (req, res) => {
    const id = req.params.id
    let user = await Userdb.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })
    if (!user) {
        res.status(500).json({ message: 'user with the given id was not found' })
    }
    res.send(user)
}

//delete user identified by user id
exports.delete = async (req, res) => {
    const id = req.params.id
    let user = await Userdb.findByIdAndDelete(id)
    if (!user) {
        res.status(500).json({ message: 'user with the given id was not found' })
    }
    res.send({ message: 'user deleted successfully' })
}