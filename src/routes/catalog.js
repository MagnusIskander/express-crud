const router = require('express').Router();
const catalogController = require('../controllers/catalog');
// const multer = require('multer');
const uploadFile = require('../middlewares/uploadPicture');


// Retrieve all books
router.get('/', catalogController.master);
// Add one book
router.get('/add', catalogController.add);
router.post('/', uploadFile.single('pic'), catalogController.plus);
// Retrieve one book
router.get('/:id', catalogController.detail);
// Edit one book
router.get('/:id/edit', catalogController.edit);
router.put('/:id', catalogController.update);
// Edit book cover
router.get('/:id/editPic', catalogController.editPic);
router.patch('/:id/editPic/', uploadFile.single('pic'), catalogController.updatePic);

// Delete one book
router.delete('/:id', catalogController.delete);


module.exports = router;
