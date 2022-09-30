module.exports = (sequelize, Sequelize) => {
    const Artical = sequelize.define("artical", {
    Id: {
        type: Sequelize.INTEGER
      },
    name: {
        type: Sequelize.STRING
      },
    description: {
        type: Sequelize.STRING
      }
    });
  
    return Artical;
  };