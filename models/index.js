const User = require('./User');
const Recommendation = require('./Recommendation');

Recommendation.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Recommendation };