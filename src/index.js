const express = require('express');
const db = require('./models');
const response = require('./middlewares/response');
const checkJwt = require('./middlewares/jwt');

const authController = require('./controllers/auth');
const linkController = require('./controllers/link');

const app = express();

app.use(response);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/auth', authController);

app.get('/',(req, res) => {
  return res.json('Api running...');
});

app.use(checkJwt);
app.use('/link', linkController);



db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Listening on port 3001');
  });
});
