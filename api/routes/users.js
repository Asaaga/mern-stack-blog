const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");


//Update
router.put("/:userId", async (req, res, next) => {
    if (req.bodyluserId === req.params.id) {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
                $set: req.body
            },
            { new: true }
            )
             res.status(200).json("updated user");
        } catch(err) {
            res.status(500).json(err);
        } 
    } else {
        res.status(401).json("You can update only your account!");
    }
})


//Delete
router.delete("/:id", async (req, res, next) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id)
                 res.status(200).json("user deleted");
            } catch(err) {
                res.status(500).json(err);
            } 

        } catch(err) {
            res.status(400).json("user not found");
        }
    } else {
        res.status(401).json("You can delete only your account!");
    }
})

//Get User 
router.get("/:id", async (req, res, next) => {
    try {
        const user = User.findById(req.params.id);
        const {password, others} = user._doc;

        res.status(200).json(others);
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router;