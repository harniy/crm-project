const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://harniy:rfdfcfrb1@cluster0.usxpn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static((path.join(__dirname, 'public'))))

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))


const authRouter = require('./routes/authRouter')
app.use('/', authRouter)

const adminRouter = require('./routes/adminRouter')
app.use('/admin', adminRouter)


const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server start on PORT ${PORT}`)
        })
    } catch(e) {
        console.log(e)
    }
}

start()


