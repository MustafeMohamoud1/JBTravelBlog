const User = require('./User');
const Recommendations = require('./Recommendations');

User.hasMany(Recommendations, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Recommendations.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Recommendations };