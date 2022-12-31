const mongoose = require('mongoose')

const gadgetSchema = new mongoose.Schema({
    name: String,
    team: String,
    users: [
        {
            type: String,
            required: false
        }
    ],
    max: Number
})

const gadgetsDb = mongoose.connection.useDb('gadgets')
gadgetsDb.on('error', (error) => console.error(error))
gadgetsDb.once('open', () => console.log('Connected to gadgets database'))

module.exports = gadgetsDb.model('Gadget', gadgetSchema)