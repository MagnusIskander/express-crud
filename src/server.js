'use strict';

// DEPENDENCIES
const express = require('express');
// const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride =  require('method-override');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const catalogRouter = require('./routes/catalog');
// const categoriesRouter = require('./routes/categories');
const contactRouter = require('./routes/contact');

const app = express();

// SETTINGS
// set our default template engine to "ejs"
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 4);

// MIDDLEWARES
// app.use(morgan('combined'));
// app.use(express.urlencoded( {extended: true} ));
// app.use(express.json());
// serve static files / path to our public directory
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(methodOverride('_method'));

// ENDPOINTS
// app.use('/api', rootRoute);
// app.use('/api/inscription', inscriptionRoute);
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

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/catalog', catalogRouter);
// app.use('/categories', categoriesRouter);
app.use('/contact', contactRouter);

// DB CONNECTION
// ¿?

// SERVER
//app.listen(app.get('port'), () => console.log('Server running on port', app.get('port')));
app.listen(app.get('port'), () => console.log(`Server running on http://localhost:${app.get('port')}/`));

// if (!module.parent) {
//   app.listen(3000);
//   console.log('Express started on port 3000');
// }
