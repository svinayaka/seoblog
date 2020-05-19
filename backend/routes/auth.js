const express = require('express');
const router = express.Router();
const app = express();
const { signup } = require('../controllers/auth');

router.post('/signup', signup);

module.exports = router;