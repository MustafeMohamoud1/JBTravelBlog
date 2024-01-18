const User = require('./User');
const Recommendations = require('./Recommendation');

Recommendations.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Recommendations };