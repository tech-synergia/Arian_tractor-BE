const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        trim: true
      },
      content: {
        type: Array,
        default: [],
      },
      image: {
        type: Object
      }  
    },
    {
        collection: "blogs",
        timestamps: true
    }
)

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog
