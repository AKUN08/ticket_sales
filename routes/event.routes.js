const express = require(`express`)

const app = express()

app.use(express.json())


const userController = require(`../controllers/event.controller`)
/** load function from auth-controller */
const { authorize } = require('../controllers/auth.controller')

/** load function from role-validation */
const {IsUser, IsAdmin} = require('../middlewares/role-validation')


app.get("/", authorize, userController.getallevent)

app.get("/:key", authorize, IsAdmin, userController.findevent)

app.post("/", authorize, IsAdmin, userController.addevent)

app.put("/:id", authorize, IsAdmin, userController.updateevent)


app.delete("/:id", authorize, IsAdmin, userController.deleteevent)

module.exports = app
