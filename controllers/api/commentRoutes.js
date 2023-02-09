const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//get comments
router.get('/', async (req, res) => {
    const newComment = await Comment.findAll().catch((err) => {
        res.json(err);
      });
      res.json(newComment);
      });

//post comments
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comm_content: req.body.comm_content,
      blog_id: req.session.blog_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
