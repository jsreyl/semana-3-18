//The authentication component of the api, here is the logic (the methods) of this part of the page
const router = require('express').Router();//To manage the routes
const authController = require('../../controllers/AuthController.js') //Here are our methods

//Request to api/auth/ returns a list of the users registered on the database
router.get('/', authController.list)

// api/auth/register, this is the function executed when a request is sent to /api/use/register
router.post('/register', authController.register)

// api/auth/signin
router.post('/signin', authController.signin)

module.exports = router;