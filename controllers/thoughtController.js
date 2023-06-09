const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get one thought by id
    async getThoughtById(req, res) {
        try {
            console.log(req.params.thoughtId)
            const thought = await Thought.findOne(req.params.thoughtId);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            await User.findByIdAndUpdate(req.params.userId, { $push: { thoughts: thought._id } });
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // PUT -update thought by id
    async updateThought(req, res) {
        try {
            const updateThought = await Thought.findOneAndUpdate(req.params.thoughtId, req.body, { new: true });
            res.json(updateThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE thought by id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.deleteOne(req.params.thoughtId);
            await User.findOneAndUpdate(thought.userId, { $pull: { thoughts: thought._id } });
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST- add reaction to thought
    async addReaction(req, res) {
        try {
            console.log(req.body)
            console.log(req.params.thoughtId)
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            const reaction = await Thought.findByIdAndUpdate({_id: req.params.thoughtId}, { $addToSet: { reactions: req.body } }, { new: true });
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE a reaction by id
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            const reaction = await Thought.findOne({ 'reactions._id': req.params.reactionId });
            const thoughtUpdated = await Thought.findByIdAndUpdate({_id:req.params.thoughtId}, { $pull: { reactions: { _id: req.params.reactionId } } }, { new: true });
            res.json(thoughtUpdated);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
