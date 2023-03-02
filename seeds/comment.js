
const { Comment } = require('../models');

const postData = [
  {
    post_comment: 'Jim wont be coming to daycare on Tuesday',
    user_id: 1
  },
  {
    post_comment: 'Megan needs to take her medicine at 4pm',
    user_id: 2
  },
  {
    post_comment: 'Olivia will not attend class next Monday',
    user_id: 3
  },
  {
    post_comment: 'Luke will go home with his father on friday',
    user_id: 4
  },

];

const seedPosts = () => Comment.bulkCreate(postData);

module.exports = seedPosts;