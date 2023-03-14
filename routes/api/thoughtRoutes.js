const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction  
} = require('../../controllers/thought-controller');

// /api/thoughts
// GET all thoughts
// POST to create a new thought
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:id
// GET one thought by its _id
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;