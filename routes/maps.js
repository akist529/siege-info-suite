const express = require('express')
const router = express.Router()
const Map = require('../models/map.js')

router.get('/', async (req, res) => {
    try {
        const maps = await Map.find()
    } catch (err) {
        res.json({ message: err.message })
    }
})

router.get('/:name', getMap, (req, res) => {
    try {
        res.send(res.map.name)
    } catch (err) {
        res.json({ message: err.message })
    }
})

async function getMap(req, res, next) {
    try {
        map = await Map.findOne({ name: new RegExp(req.params.name, "i") })
    } catch {
        return res.status(500).json({ message: err.message })
    }

    res.map = map
    next()
}

module.exports = router