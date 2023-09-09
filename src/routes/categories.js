const router = require('express').Router();
const categoriesController = require('../controllers/categories');


router.get('/', categoriesController.master);


module.exports = router;
