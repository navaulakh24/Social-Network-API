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
        