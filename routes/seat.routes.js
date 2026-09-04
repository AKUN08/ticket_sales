const express = require(`express`)

const app = express()

app.use(express.json())

const userController = require(`../controllers/seat.controller`)
/** load function from auth-controller */
const { authorize } = require('../controllers/auth.controller')

/** load function from role-validation */
const {IsUser, IsAdmin} = require('../middlewares/role-validation')

app.get("/", authorize, IsAdmin, userController.getallseat)

app.get("/:key", authorize, IsAdmin, userController.findseat)

app.post("/", authorize, IsAdmin, userController.addseat)

app.put("/:id", authorize, IsAdmin, userController.updateseat)


app.delete("/:id", authorize, IsAdmin, userController.deleteseat)

module.exports = app
