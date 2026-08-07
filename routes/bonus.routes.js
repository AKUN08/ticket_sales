const express = require(`express`)

const app = express()

app.use(express.json())

const userController = require(`../controllers/bonus.controller`)

app.get("/", userController.getallbonus)

app.get("/:key", userController.findbonus)

app.post("/", userController.addbonus)

app.put("/:id", userController.updatebonus)


app.delete("/:id", userController.deletebonus)

module.exports = app
