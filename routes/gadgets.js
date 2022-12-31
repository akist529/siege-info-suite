const express = require('express')
const router = express.Router()
const Gadget = require('../models/gadget.js')

router.get('/', async (req, res) => {
    try {
        const gadgets = await Gadget.find()
    } catch (err) {
        res.json({ message: err.message })
    }
})

router.get('/:name', getGadget, (req, res) => {
    try {
        res.send(res.gadget.name)
    } catch (err) {
        res.json({ message: err.message })
    }
})

async function getGadget(req, res, next) {
    try {
        gadget = await Gadget.findOne({ name: new RegExp(req.params.name.replace("-", " "), "i") })

        if (!gadget) {
            return res.status(404).json({ message: "Cannot find gadget" })
        }
    } catch {
        return res.status(500).json({ message: err.message })
    }

    res.gadget = gadget
    next()
}

module.exports = router