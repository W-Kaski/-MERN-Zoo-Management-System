const Admin = require("../models/adminSchema")

const adminRegister = async (req, res) => {
    try {
        const admin = new Admin({
            ...req.body
        })

        const existingEmail = await Admin.findOne({email: req.body.email});
        const existingZoo = await Admin.findOne({zoo: req.body.zoo});

        if (existingEmail) {
            res.send({message: "Email already exists"});

        } else if (existingZoo) {
            res.send({message: "Zoo name already exists"});

        } else {
            let result = await admin.save();
            result.password = undefined;
            res.send(result);
        }

    } catch (err) {
        res.status(500).json(err);
    }
};


const adminLogIn = async (req, res) => {
    if (req.body.email && req.body.password) {
        let admin = await Admin.findOne({email: req.body.email});
        if (admin) {
            if (req.body.password === admin.password) {
                admin.password = undefined;
                res.send(admin);
            } else {
                res.send({message: "Invalid password"})
            }

        } else {
            res.send({message: "User not found"})
        }

    } else {
        res.send({message: "Email and password are required"})
    }
};

const getAdminDetail = async (req, res) => {
    try {
        let admin = await Admin.findById(req.params.id);
        if (admin) {
            admin.password = undefined;
            res.send(admin);
        } else {
            res.send({message: "No admin found"});
        }

    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {adminRegister, adminLogIn, getAdminDetail};
