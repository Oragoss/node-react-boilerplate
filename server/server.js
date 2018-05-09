//https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/
import express from 'express'
// import session from 'express'
// import bodyParser from 'body-parser'
// import flash from 'connect-flash'
// import path from 'path'
// import validator from 'express-validator'
// const dotenv = require('dotenv')

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
// dotenv.load({ path: '.env' });

const port = process.env.PORT || 3001

/**
 * Controllers (route handlers).
 */
import {index} from './controllers/homeController'
import {about} from './controllers/homeController'
// const userController = require('./controllers/user');
// const apiController = require('./controllers/api');
// const contactController = require('./controllers/contact');

const app = express();

app.set("port", process.env.PORT || 3001);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(expressValidator());
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: process.env.SESSION_SECRET,
//   cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
// app.get('/', HomeController(req,res).index)
app.get('/', index)
app.get('/about', about)

const server = app.listen(port, () => {
  console.log('Listening on port ' + port + '.');
});