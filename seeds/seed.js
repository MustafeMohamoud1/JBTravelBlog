const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./exampleUserData.json');
// const for recommendationData + location

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    //handler for recommendationData

    process.exit(0);
};

seedDatabase();