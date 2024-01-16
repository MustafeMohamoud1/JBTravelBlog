const User = require('./User');
const Recommendations = require('./Recommendations');

Recommendations.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Recommendations };