const bcrypt = require('bcrypt');
const Zookeeper = require("../models/zookeeperSchema")
const Venue = require("../models/venueSchema")

const zookeeperRegister = async (req, res) => {
    const {name, email, password, role, zoo, venue, species} = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const zookeeper = new Zookeeper({
            ...req.body
        })

        const existingEmail = await Zookeeper.findOne({email: req.body.email});

        if (existingEmail) {
            res.send({message: "Email already exists"});

        } else {
            let result = await zookeeper.save();
            await Venue.findByIdAndUpdate(venue, {zookeeper: zookeeper._id})
            result.password = undefined;
            res.send(result);
        }

    } catch (err) {
        res.status(500).json(err);
    }
};


const zookeeperLogIn = async (req, res) => {
    if (req.body.email && req.body.password) {
        let zookeeper = await Zookeeper.findOne({email: req.body.email});
        if (zookeeper) {
            const validated = await bcrypt.compare(req.body.password, zookeeper.password)
            if (validated) {
                zookeeper = await zookeeper.populate("venue", "venue")
                zookeeper = await zookeeper.populate("zoo", "zooName")
                zookeeper = await zookeeper.populate("species", "speciesName")

                zookeeper.password = undefined;
                res.send(zookeeper);
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

const getZookeeperDetail = async (req, res) => {
    try {
        let zookeeper = await Zookeeper.findById(req.params.id)
            .populate("venue", "venue")
            .populate("zoo", "zooName")
            .populate("species", "speciesName")
        if (zookeeper) {
            zookeeper.password = undefined;
            res.send(zookeeper);
        } else {
            res.send({message: "No zookeeper found"});
        }

    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {zookeeperRegister, zookeeperLogIn, getZookeeperDetail};
