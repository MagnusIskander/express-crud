const router = require('express').Router();
const aboutController = require('../controllers/about');


router.get('/', aboutController.master);


module.exports = router;
