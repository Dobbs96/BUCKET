const router = require("express").Router();
const { Comment, User } = require("../../models");

// These are for: /api/comment endpoint

router.get("/", async (req, res) => {
  // find all Comment
  // be sure to include its associated User
  const commentData = await Comment.findAll({
    include: [{ model: User, attributes: { exclude: ["password"] } }],
  });
  res.json(commentData);
});

router.post("/", async (req, res) => {
  // create a new Comment
  const newComment = await Comment.create(req.body).catch((err) =>
    res.status(500).json(err.message)
  );
  res.status(200).json(newComment);
});

router.put("/:id", async (req, res) => {
  // update a Comment by its `id` value
  const updateCommentData = await Comment.update(req.body, {
    where: { id: req.params.id },
  }).catch((err) => res.status(500).json(err));
  if (!updateCommentData[0]) {
    return res.status(404).json({
      error_message: `No update done since Comment ID ${req.params.id} doesn't exist. Please double check your Comment ID.`,
    });
  }
  res.status(200).json({ message: "Your Comment was updated successfuly." });
});

router.delete("/:id", async (req, res) => {
  // delete a Comment by its "id" value
  const deletedComment = await Comment.destroy({
    where: { id: req.params.id },
  });
  if (!deletedComment) {
    return res.status(404).json({
      error_message: `Cannot be deleted because the Comment with ID ${req.params.id} does not exist.`,
    });
  }
  res
    .status(200)
    .json({ message: "The Comment has successfully been deleted." });
});

module.exports = router;
