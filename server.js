require('dotenv').config()

const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors")
app.use(cors())
const publicPath = path.join(__dirname, 'build')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"))
})

const gadgetsRouter = require('./routes/gadgets')
app.use('/gadgets', gadgetsRouter)

const mapsRouter = require('./routes/maps')
app.use('/maps', mapsRouter)

const operatorsRouter = require('./routes/operators')
app.use('/operators', operatorsRouter)

const weaponsRouter = require('./routes/weapons')
app.use('/weapons', weaponsRouter)

app.listen(3000, () => console.log('Server Started'))