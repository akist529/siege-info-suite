const express = require('express')
const router = express.Router()
const Operator = require('../models/operator.js')

router.get('/', async (req, res) => {
    try {
        const operators = await Operator.find()
    } catch (err) {
        res.json({ message: err.message })
    }
})

router.get('/:name', getOperator, (req, res) => {
    try {
        res.send(res.operator)
    } catch (err) {
        res.json({ message: err.message })
    }
})

async function getOperator(req, res, next) {
    try {
        operator = await Operator.findOne({ name: new RegExp(req.params.name, "i") })

        if (!operator) {
            return res.status(404).json({ message: 'Cannot find operator' })
        }
    } catch {
        return res.status(500).json({ message: err.message })
    }

    res.operator = operator
    next()
}

module.exports = router