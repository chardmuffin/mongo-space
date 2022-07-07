const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// set up all GET and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);


// set up the GET one, PUT, and DELETE at /api/users
router
    .route(':id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


module.exports = router;