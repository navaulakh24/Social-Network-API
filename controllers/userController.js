const { ObjectId } = require('mongodb');
const { User, Thought } = require('../models');

module.exports = {
    // get all users
    async getAllUsers(req, res) {
        try {
            const users = await User
                .find()
                .populate('thoughts')
                .populate('friends');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get one user by id
    async getUserById(req, res) {
        try {
            const user = await User
                .findById(req.params.userId)
                .populate('thoughts')
                .populate('friends');
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST - create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // PUT - update user by id
    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE - delete user and thought by id
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            await Thought.deleteMany({ username: user.username });
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST - add a new friend to a user's friend list
    async addFriend(req, res) {
        try{
            const user = await User.findOne({ _id: req.params.userId });
            const friend = await User.findOne({ _id: req.params.friendId });
            if (!user || !friend) {
                res.status(404).json({ message: 'User or friend not found' });
                return;
            }
            if (user.friends.includes(friend._id)) {
                res.status(400).json({ message: 'Friend already exists' });
                return;
            }
            user.friends.push(friend._id);
            await user.save();
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    