const express = require(`express`)

const app = express()

app.use(express.json())

const ongkirController = require(`../controllers/ongkir.controller`)

app.get("/", ongkirController.getallongkir)

app.get("/:key", ongkirController.findongkir)

app.post("/", ongkirController.addongkir)

app.put("/:id", ongkirController.updateongkir)

app.delete("/:id", ongkirController.deleteongkir)
module.exports = app
