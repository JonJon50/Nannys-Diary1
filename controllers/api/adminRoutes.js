const router = require('express').Router();
const Admin = require('../../models/Adminpost');

// Admin find all posts
router.get('/', async (req, res) => {
  try {
    const adminAll = await Admin.findAll();
    res.status(200).json(adminAll);
  } catch (err) {
    res.status(400).json(err);
  }
});

// CREATE a new post
router.post('/', async (req, res) => {
  try {
    const postData = await Admin.create({
        date_created: req.body.date_created,
        meals: req.body.meals,
        activities: req.body. activities,
        nap_schedule: req.body.nap_schedule,
        child_mood: req.body.child_mood,
        other: req.body.other,
        child_id: req.body.child_id,


    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one post
router.get('/:id', async (req, res) => {
  try {
    const adminPost = await Admin.findByPk(req.params.id);
    if (!adminPost) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.render('comment', {
      ...adminPost,

      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a post
router.put('/:id', async (req, res) => {
  try {
    const updatePost = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatePost[0]) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a post
router.delete('/:id', async (req, res) => {
  try {
    const deletePost = await Admin.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletePost) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;