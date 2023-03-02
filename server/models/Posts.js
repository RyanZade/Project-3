const { Schema, model } = require('mongoose');

const postsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  comment: [
    {
      type: String,
    },
  ],
});

const Posts = model('Posts', postsSchema);

module.exports = Posts;
