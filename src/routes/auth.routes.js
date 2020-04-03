const router = require('express').Router();
const {
  renderSignIn,
  renderSignUp,
  signUp,
} = require('../controllers/auth.controller');

router.get('/signin', renderSignIn);
router.get('/signup', renderSignUp);
router.post('/signup', signUp);

module.exports = router;
