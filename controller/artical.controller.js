const db = require("../model");
const Artical = db.artical; 
const User = db.user; 
const middle = require("./middleware/artical.middleware.js");
// const Op = db.Sequelize.Op;

exports.Articaldetails = ( middle , (req,res) => {

    res.send ("")

}


)


































// exports.findAll = (req, res) => {
//   const title = req.query.title;
//   var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

//   Tutorial.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Somethings went wrong data not found"
//       });
//     });
// };

// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Tutorial.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving data with id=" + id
//       });
//     });
// };



// exports.findOne = (req, res) => {
//   const title = req.params.title;

//   Tutorial.findOne({
//     where: { title: title }
//   })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving data "
//       });
//     });
// };