const User = require('./User');
const Recommendations = require('./Recommendations');

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Recommendations.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Recommendations };