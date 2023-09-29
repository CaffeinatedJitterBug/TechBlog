const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
  });
  

module.exports = { BlogPost, Comment, User }