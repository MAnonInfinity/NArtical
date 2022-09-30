module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
    Id: {
        type: Sequelize.INTEGER
      },
    name: {
        type: Sequelize.STRING
      },
    email: {
        type: Sequelize.STRING
      },
    status: {
        type: Sequelize.INTEGER
    }
    });
  
    return User;
  };