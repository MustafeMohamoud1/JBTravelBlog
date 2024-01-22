const sequelize = require('../config/connection');
const {Recommendation,User } = require('../models');
const userData = require('./exampleUserData.json');
const recomData = require('./recommendation.json');
// const for recommendationData + location


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    const usersData = await Recommendation.bulkCreate(userData,{
        individualHooks: true,
        returning: true,
    });
    const usersRecom = await Recommendation.bulkCreate(recomData,{
        individualHooks: true,
        returning: true,
    });
  
   

    //handler for recommendationData

    process.exit(0);
};




seedDatabase();




