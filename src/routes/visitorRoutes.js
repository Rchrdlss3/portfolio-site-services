const express = require('express')
const router = express.Router();
const visitorController = require('../controllers/visitorController.js');


router.get('/', visitorController.get);
router.post('/create', visitorController.post);
router.put('/update',visitorController.put);

module.exports = router