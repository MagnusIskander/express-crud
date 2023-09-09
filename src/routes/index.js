// Alternative
/*app
  .route('/api')
  .get(rootRoute.start);

app
  .route('/api/inscription')
  .get(inscriptionRoute.listAllInscriptions)
  .post(inscriptionRoute.createNewInscription);

app
  .route("/api/inscription/:id")
  .get(inscriptionRoute.readInscription)
  .put(inscriptionRoute.updateInscription)
  .delete(inscriptionRoute.deleteInscription);*/

const router = require('express').Router();
const indexController = require('../controllers/index');


router.get('/', indexController.master);


module.exports = router;
