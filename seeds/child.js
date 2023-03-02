const { Child } = require('../models');

const postData = [
  
  {
    
    child_name: 'Jim White',
    diet_restrictions: 'n/a',
    medications:'n/a',
    other:'He usually takes 2 naps a day',
    user_id: 1
  },
  {
   
    child_name: 'Megan Williams',
    diet_restrictions: 'Penuts',
    medications:'Allegra if allergies',
    other:'He usually takes 1 nap a day',
    user_id: 2
  },
  {
   
    child_name: 'Olivia Sanders',
    diet_restrictions: 'Gluten',
    medications:'Benadryl if allergies',
    other:'Olivia loves to play outside.',
    user_id: 3
  },
  {
    
    child_name: 'Luke Jones',
    diet_restrictions: 'Tomatoes',
    medications:'n/a',
    other:'Please do not forget to send home his favorite toy',
    user_id: 4
  },
  

];

const seedPosts = () => Child.bulkCreate(postData);

module.exports = seedPosts;