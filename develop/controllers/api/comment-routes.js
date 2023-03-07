const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  Comment.create(req.body)
  .then((newComment) => {
    res.status(200).json(newComment)
  })
  .catch((err) => {
    res.status(400).json(err)
  })
});

module.exports = router;
