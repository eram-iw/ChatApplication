const express = require('express')
const dotenv = require('dotenv')
const connectDB=require('./config/db.js')
const userRoutes=require('./routes/userRoutes')
const chatRoutes=require('./routes/chatRoutes')
const { notFound, errorhandler } = require('./middleware/errorMiddleWare')

const app = express()

app.use(express.json()); //to accept JSON Data

dotenv.config();
connectDB()

app.get('/', (req, res) => {
    res.send("API is working")
})

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorhandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on PORT ${PORT}`))