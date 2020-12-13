//Router Index
const router = require('express').Router();
//const { route } = require('./api/auth');
//One router manager per item in the route, i.e /api/auth, /api/users, /api/articles, etc.
const apiRouterAuthentication = require('./api/auth')

router.use('/auth', apiRouterAuthentication);
//.com/api/auth
//.com/api/auth/signin

module.exports = router;