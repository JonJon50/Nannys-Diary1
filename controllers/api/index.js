const router = require('express').Router();
const adminRoutes = require('./adminRoutes');
const childRoutes = require('./childRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/admin', adminRoutes);
router.use('/childrens', childRoutes);

module.exports = router;
