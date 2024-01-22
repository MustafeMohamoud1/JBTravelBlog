const sequelize = require('../config/connection');
const { User, Recommendation } = require('../models');

const userData = require('./exampleUserData.json');
const recommendationData = require('./recommendationsData.json');
// const for recommendationData + location

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Recommendation.bulkCreate(recommendationData, {include: {model: User}});

    process.exit(0);
};

seedDatabase();