const Blog = require("../model/blogModel");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const blogController = {
    create: async (req,res) => {
        try {
            let newBlog = await Blog.create(req.body);
            res.json({msg: "Blog Created Successfully", blog: newBlog })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getAll: async(req,res) => {
        try {
            let data = await Blog.find()

            return res.status(200).json({
                length: data.length, blogs: data
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message})
        }
    },
    getSingle: async (req,res) => {
        try {
            let data = await  Blog.findById({_id: req.params.id})
                if(!data)
                    return res.status(404).json({ msg: "Blog doesn't exists."})
                res.status(200).json({ blog : data})
        } catch (err) {
            return res.status(500).json({ msg: err.message})
        }
    },
    update: async(req,res) => {
        try {
            let data = await Blog.findById({ _id: req.params.id })
                if(!data)
                    return res.status(404).json({ msg: "Blog doesn't exists."})
            let updated = await Blog.findByIdAndUpdate({ _id: req.params.id }, req.body)
            res.status(200).json({ msg: "Blog updated successfully.", blog: updated})
        } catch (err) {
            return res.status(500).json({ msg: err.message})
        }
    },
    delete: async (req,res) => {
        try {
            let data = await Blog.findById({ _id: req.params.id });
            if(!data)
                return res.status(404).json({msg: "Blog doesn't exists."});

                await Blog.findByIdAndDelete({ _id: req.params.id})
                return res.status(200).json({ msg: "Blog deleted successfully."})
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = blogController;