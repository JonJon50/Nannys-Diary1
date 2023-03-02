const Child = require('./Child');
const AdminPost = require('./Adminpost');
const Comment = require('./Comment');
const User = require('./User');


User.hasMany(Child, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Child.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

AdminPost.belongsTo(Child, {
  foreignKey: 'child_id',
});
Child.hasMany(AdminPost, {
  foreignKey: 'child_id',
  
});




module.exports = { Child, AdminPost, Comment, User};