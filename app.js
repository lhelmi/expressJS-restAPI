const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`database Connected!`)
    }).catch((err) => {
        console.log(`cannot connect to DB`, err)
        process.exit()
    })

app.get('/', (req, res) => {
    res.json({
        message: 'yellow'
    })
})

require('./app/routes/post.routes')(app)

const port = 8000
app.listen(port, () =>{
    console.log(`server is running ${port}`)
})