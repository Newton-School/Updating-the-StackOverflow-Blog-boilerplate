const mongoose = require("mongoose");

/*

1. "heading" should be a string and it is required.
2. "body" should be a string and it is required.
3. "creator_id" should be a string and it is required.
4. "tags" should be a string and it is required.

*/

const discussionSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  creator_id: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Discussion", discussionSchema);

