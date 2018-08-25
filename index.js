const express = require('express');


const app = express();


//create route handlers
app.get('/', (req, res) => {
  res.send({ hi: 'Bye Jabroni'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
