const mongoose = require('mongoose')

const weaponSchema = new mongoose.Schema({
    name: String,
    class: String,
    type: String,
    modes: [
        {
            type: String,
            required: false
        }
    ],
    users: [
        {
            type: String,
            required: false
        }
    ],
    ranges: [
        {
            type: Number,
            required: false
        }
    ],
    damages: {
        standard: [
            {
                type: Number,
                required: false
            }
        ],
        suppressed: [
            {
                type: Number,
                required: false
            }
        ]
    },
    rof: Number,
    mobility: Number,
    mag: Number,
    max: Number,
    reload: {
        empty: Number,
        tactical: Number,
    },
    ads: {
        normal: Number,
        angled: Number,
    },
    ammo: String,
    attachments: {
        sight: [
            {
                type: String,
                required: false
            }
        ],
        barrel: [
            {
                type: String,
                required: false
            }
        ],
        grip: [
            {
                type: String,
                required: false
            }
        ],
        underBarrel: [
            {
                type: String,
                required: false
            }
        ]
    }
})

const weaponsDb = mongoose.connection.useDb('weapons')
weaponsDb.on('error', (error) => console.error(error))
weaponsDb.once('open', () => console.log('Connected to weapons database'))

module.exports = weaponsDb.model('Weapon', weaponSchema)