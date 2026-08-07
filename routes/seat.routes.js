const express = require(`express`)

const app = express()

app.use(express.json())

const userController = require(`../controllers/seat.controller`)

app.get("/", userController.getallseat)

app.get("/:key", userController.findseat)

app.post("/", userController.addseat)

app.put("/:id", userController.updateseat)


app.delete("/:id", userController.deleteseat)

module.exports = app
