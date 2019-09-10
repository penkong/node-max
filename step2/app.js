//
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const express = require('express');
const app = express();

// it parse request come from client for express. like form
app.use(bodyParser.urlencoded({ extended: false }));
// serve public files.
app.use(express.static(path.join(__dirname), 'public'));
// get and verbs get exact route but use don't if use , use
// u must consider sequence of routes. but in this case not anymore.
app.use('/admin', adminRoutes);
app.use(shopRoutes);
// 404 page;
app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, console.log(`listening on port ${port}`));

