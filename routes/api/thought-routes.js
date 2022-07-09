const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction } = require('../../controllers/thought-controller');

// /api/thoughts/
router.route('/').get(getAllThought);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId').get(getThoughtById).put(updateThought);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

// /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions').put(addReaction);

// /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;