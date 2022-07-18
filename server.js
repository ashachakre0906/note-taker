// required dependencies 
const express = require('express');
const path = require('path');
//these routes gives the server direction of how to respond when user request data from various URLS's.
const api = require('./routes/apiRoutes.js');
const html = require('./routes/htmlRoutes.js')
const PORT = process.env.PORT || 3001;
//telling node that we are creating express server
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);
//below code effectively listen to our port 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
