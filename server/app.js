require('dotenv').config()
const express = require('express')
const sequalize = require('./db')
const models=require('./models/models')
const cors=require('cors')
const placesRoutes = require('./routes')
const app = express()
app.use(cors())
app.use(express.json())

app.use(placesRoutes)
const PORT = process.env.PORT || 8000
const start = async () => {
    try {
       await sequalize.authenticate()
       await sequalize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()
