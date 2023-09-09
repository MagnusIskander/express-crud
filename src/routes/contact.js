const router = require('express').Router();
const contactController = require('../controllers/contact');


router.get('/', contactController.master);


module.exports = router;
