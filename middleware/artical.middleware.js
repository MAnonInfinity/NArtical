const usermodel = require('../model/user.model');
const User = db.artical;

// const findstatus = (req , res, next) => {

//     const status = req.body.status

    // const status1 = (err) => {
    //     if (err) throw err;
    //         var user = usermodel.findOne({where:{status:1}});
    //       if (user != null) throw err;
    //       console.log(user);
    //       res.send(user);
    // }
    //     const status0 = (err) => {
    //         if (err) throw err;
    //             var user = usermodel.findOne({where:{status:0}});
    //           if (user != null) throw err;
    //           console.log(user);
    //           res.send(user);
    // }
    
    // const conmid  = (req, res, next) => {

    //     const status = req.body.status

    //     if ( status == 1) {
    //         res.send('artical table')
    //     } else if ( status == 0 ) {
    //         res.send('you are not eligible')
    //     }
    //     else{    
    //         next()
    //     }
    // }

    const getStatus = (req, res, next) => {
        const id = req.body.params

        const userData = await usermodel.findOne({
            where: {
                id: id
            }
        })
    }
    

    



module.exports = findstatus;
