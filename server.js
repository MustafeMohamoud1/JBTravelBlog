//require express for running as service
const express = require('express');
const session = require('express-session');

//offload routes to controllers directory reference
const routes = require('./controllers');
//include handlebars for templating
const exphbs = require('express-handlebars');
//const helpers = require('./utils/helpers');
//specify db connection for ORM
const sequelize = require('./config/connection');
//init session state
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');

const dadJokes = require('generate-dad-jokes');

const app = express();
//setup port for local or heroku operation
const PORT = process.env.PORT || 3001;

//setup session object
const sess = {
  secret: '14-mvc-secret',
  cookie: { maxAge: 1200000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//point express to the session object
app.use(session(sess));

//use static files from public folder
app.use(express.static('public'));

//set up handlebars
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');

//enable POST handling in express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//sync ORM to the datasource
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
<<<<<<< HEAD
=======

console.log(dadJokes);
>>>>>>> d608bf480a467ae93893611969b11e86d071a96f
