const { AdminPost } = require('../models');

const postData = [
  {
    meals: 'Chicken nuggets and apple sauce for lunch. Goldfish for afternoon snack',
    activities: 'arts and crafts: drew a polar bear',
    nap_schedule:'took nap for 2 hrs',
    child_mood: 'Happy: Overall good day',
    other: 'n/a',
    child_id: 1
   
  },
  {
   
    meals: 'Chicken soup for lunch. Apple for afternoon snack',
    activities: 'Played with jump-rope',
    nap_schedule:'took nap for 1 hr',
    child_mood: 'A little moody today',
    other: 'n/a',
    child_id: 2
   
  },
  {
   
    meals: 'Mashed potatoes, chicken and veggies. Pear for afternoon snack',
    activities: 'Music class',
    nap_schedule:'took nap for 2 hrs',
    child_mood: 'Happy: Overall good day',
    other: 'n/a',
    child_id: 3
   
  },
  {
   
    meals: 'Rice, veggies and steak. Banana for afternoon snack',
    activities: 'Played with her favorite doll',
    nap_schedule:'took nap for 1 hr',
    child_mood: 'Was not feeling very well. Had a low fever.',
    other: 'n/a',
    child_id: 4
   

  },

];

const seedPosts = () => AdminPost.bulkCreate(postData);

module.exports = seedPosts;