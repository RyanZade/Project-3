const { Schema, model } = require('mongoose');

const postsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: [
    {
      type: String,
    },
  ],
  author: {
    type: String,
    ref: 'User'
  }
});

const Posts = model('Posts', postsSchema);

module.exports = Posts;
