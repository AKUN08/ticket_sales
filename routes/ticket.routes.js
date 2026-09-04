/** load library express */
const express = require(`express`)

/** initiate object that instance of express */
const app = express()
/** allow to read 'request' with json type */
app.use(express.json())
/** load ticket's controller */
const ticketController = require(`../controllers/ticket.controller`)
/** load function from auth-controller */
const { authorize } = require('../controllers/auth.controller')

/** load function from role-validation */
const {IsUser, IsAdmin} = require('../middlewares/role-validation')

app.post("/", authorize, ticketController.addticket)
app.get("/", authorize, ticketController.getallticket)
app.get("/populer", authorize, IsAdmin, ticketController.getMostPopularEvent)
app.get("/:id", authorize, IsAdmin, ticketController.ticketByID)
app.get("/event/:id", authorize, IsAdmin, ticketController.ticketByeventID)
app.get("/user/:id", authorize, IsAdmin, ticketController.ticketByuserID)
module.exports = app
