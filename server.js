const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js');
const html = require("./routes/htmlRoutes.js")
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', html);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
