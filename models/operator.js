const mongoose = require('mongoose')

const operatorSchema = new mongoose.Schema({
    name: String,
    team: String,
    ability: String,
    description: String,
    health: Number,
    role: [
        {
            type: String,
            required: false
        }
    ],
    synergies: [
        {
            name: String,
            description: String,
            image: String
        }
    ],
    counters: [
        {
            name: String,
            description: String,
            image: String,
        }
    ],
    tips: [
        {
            description: String,
            image: String
        }
    ]
})

const operatorsDb = mongoose.connection.useDb('operators')
operatorsDb.on('error', (error) => console.error(error))
operatorsDb.once('open', () => console.log('Connected to operators database'))

module.exports = operatorsDb.model('Operator', operatorSchema)