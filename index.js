const express = require('express');
const app = express();
const db = require("./model");
const routes = require('./router/artical.router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const requireJsonContent = () => {
//   return (req, res, next) => {
//     if (req.method == 'GET'){
//         res.status(400).send('your block')
//     } else {
//       next()
//     }
//   }
// }
// app.post('/', requireJsonContent(), (req, res, next) => {
//   res.send('You sent JSON');
// })

app.get ('/', (req, res) => {
    res.json('Home Page');
});

app.use('/api', routes);

db.sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

app.listen(4000,(err) => {
console.log('Your port is listing 4000')
});