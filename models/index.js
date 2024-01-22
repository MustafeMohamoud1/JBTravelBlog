const Recommendation= require('./Recommendation');
const User = require('./User');

Recommendation.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Recommendation,User};





