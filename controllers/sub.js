const Sub = require('../models/sub')
const slugify = require('slugify')

exports.create = async (req,res) => {
    try{
        const {name, parent} = req.body
        const sub = await new Sub({name, parent, slug: slugify(name).toLowerCase()}).save()
        res.json(Sub)
    } catch(err) {
        console.log(err)
        res.status(400).send('Create sub failed')
    }
}

exports.list =  async (req,res) => res.json(await Sub.find({}).sort({createdAt: -1}).exec())

exports.read = async (req,res) => res.json(await Sub.findOne({slug: req.params.slug}).exec())

exports.update = async (req,res) => {
    const {name, parent} = req.body
    try {
        const updated = await Sub.findOneAndUpdate(
            {slug: req.params.slug}, 
            {name, parent, slug: slugify(name)}, 
            {new: true})
        res.json(updated)
    } catch(err) {
        console.log(err)
        res.status(400).send('Sub update failed')
    }
}

exports.remove = async (req,res) => {
    try {
        const deleted = await Sub.findOneAndDelete({slug: req.params.slug})
        res.json(deleted)
    } catch(err) {
        res.status(400).send('Sub delete failed')
    }
}