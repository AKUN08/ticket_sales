const express = require(`express`)

const app = express()

const PORT = 8000

const cors = require(`cors`)

app.use(cors())

const userRoute = require(`./routes/user.routes`)
const bonusRoute = require(`./routes/bonus.routes`)
const eventRoute = require('./routes/event.routes')
const seatRoute = require('./routes/seat.routes')
const ticketRoute = require('./routes/ticket.routes')
const auth = require(`./routes/auth.routes`)
const ongkirRoute = require(`./routes/ongkir.routes`)

app.use(`/user`, userRoute)
app.use(`/bonus`, bonusRoute)
app.use(`/event`, eventRoute)
app.use(`/seat`, seatRoute)
app.use(`/ongkir`, ongkirRoute)
app.use(`/ticket`, ticketRoute)
app.use(`/auth`, auth)

app.listen(PORT, () => {
    console.log(`Server of Ticket Sales runs on port ${PORT}`)
})
app.use(express.static(__dirname))