const express = require(`express`)

const app = express()

app.use(express.json())


const userController = require(`../controllers/event.controller`)

app.get("/", userController.getallevent)

app.get("/:key", userController.findevent)

app.post("/", userController.addevent)

app.put("/:id", userController.updateevent)


app.delete("/:id", userController.deleteevent)

module.exports = app
