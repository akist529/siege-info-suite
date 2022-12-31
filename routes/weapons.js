const express = require('express')
const router = express.Router()
const Weapon = require('../models/weapon.js')

router.get('/', async (req, res) => {
    try {
        const weapons = await Weapon.find()
    } catch (err) {
        res.json({ message: err.message })
    }
})

router.get('/:name', getWeapon, (req, res) => {
    try {
        res.send(res.weapon.name)
    } catch (err) {
        res.json({ message: err.message })
    }
})

async function getWeapon(req, res, next) {
    try {
        weapon = await Weapon.findOne({ name: new RegExp(req.params.name, "i") })

        if (!weapon) {
            return res.status(404).json({ message: 'Cannot find weapon' })
        }
    } catch {
        return res.status(500).json({ message: err.message })
    }

    res.weapon = weapon
    next()
}

module.exports = router