const express = require('express');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Survey');
require('./services/passport');
const surveyRoutes = require('./routes/surveyRoutes');

//connect to mondodb
mongoose.connect(keys.mongoURI);


//create an express app instance
const app = express();


//middleware configuration
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 *60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//create route handlers
authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

if(process.env.NODE_ENV === 'production'){
  //makes sure that in priduction express serves up the main.js/main.css file
  app.use(express.static('client/build'));

  //express serves the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

//listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('running on ' + PORT);
});
