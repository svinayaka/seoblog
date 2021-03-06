const express = require('express');
const router = express.Router();
const app = express();
const { signup } = require('../controllers/auth');

const { runValidation } = require('../validators');
const { userSignupValidator } = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);

module.exports = router;