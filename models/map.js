const mongoose = require('mongoose')

const mapSchema = new mongoose.Schema({
    name: String,
    playlists: [
        {
            type: String,
            required: false
        }
    ],
    layout: {
        '1F': [
            {
                room: String,
                position: {
                    left: Number,
                    top: Number
                }
            }
        ],
        '2F': [
            {
                room: String,
                position: {
                    left: Number,
                    top: Number
                }
            }
        ],
        '3F': [
            {
                room: String,
                position: {
                    left: Number,
                    top: Number
                }
            }
        ],
        '4F': [
            {
                room: String,
                position: {
                    left: Number,
                    top: Number
                }
            }
        ],
        'B': [
            {
                room: String,
                position: {
                    left: Number,
                    top: Number
                }
            }
        ],
        'EXT': [
            {
                room: String,
                position: {
                    left: Number,
                    top: Number
                }
            }
        ]
    }
})

const mapsDb = mongoose.connection.useDb('maps')
mapsDb.on('error', (error) => console.error(error))
mapsDb.once('open', () => console.log('Connected to maps database'))

module.exports = mapsDb.model('Map', mapSchema)