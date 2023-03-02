const { User } = require('../models');

const postData = [
  {
    name: 'Susan White',
    email:'susanwhite@email.com',
    password: 'susan1234', 
    user_id: 1
  },
  {
    name: 'Bob Williams',
    email:'bobwill@email.com',
    password: 'bob1234', 
    user_id: 2
  },
  {
    name: 'Matt Sanders',
    email:'mattsanders@email.com',
    password: 'matt1234', 
    user_id: 3
  },
  {
    name: 'Daphne Jones',
    email:'daphne@email.com',
    password: 'daphne1234', 
    user_id: 4
  },

];

const seedPosts = () => User.bulkCreate(postData);

module.exports = seedPosts;