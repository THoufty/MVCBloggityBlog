const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
  Post.create({
    ...req.body,
    user_id: req.session.userId
  })
  .then((newPost) => {
    res.status(200).json(newPost)
  })
  .catch((err) => {
    res.status(400).json(err)
  })
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(req.body,
        {where: { id: req.params.id }}
    )
    .then((newPost) => {
      res.status(200).json(newPost)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
});

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedPost) => {
        res.status(200).json(deletedPost)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
});

module.exports = router;
