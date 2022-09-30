const express = require('express');
const midd = require('./middleware/artical.middleware.js');
const router = express.Router();


// router.get('/artical', (req, res) => {
//   res.send('respond with a resource');
// });


router.get('/artical', midd);



module.exports = router;