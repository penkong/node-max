const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// controllers
const errorController = require('./controllers/e404');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000);

// mvc sepration of concerns and know which part use for which
// model / views / controllers
// model resp for represent data save fetch 

// views what user sees.

// controllers are connection point between your models and views
// middleman => routes is hoc of controller.
// controllers split across middlewares functions.