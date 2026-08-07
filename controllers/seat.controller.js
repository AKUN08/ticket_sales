const { request } = require("express")

    const seatModel = require(`../models/index`).seat

const Op = require(`sequelize`).Op
exports.getallseat = async (request, response) => {
    let seats = await seatModel.findAll()
    return response.json({
        success: true,
        data: seats,
        message: `All seats have been loaded`
    })
}
exports.findseat = async (request, response) => {
    let keyword = request.params.key
    let seats = await seatModel.findAll({
        where: {
            [Op.or]: [
                { seatID: { [Op.substring]: keyword } },
                { seatName: { [Op.substring]: keyword } },
                { price: { [Op.substring]: keyword } },
                { status: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true,
        data: seats,
        message: `Seats have been loaded`
    })
}
exports.addseat = async (request, response) => {
    let {seatID, rowNum, seatNum, status } = request.body
    let seat = await seatModel.create({
        seatID,
        rowNum,
        seatNum,
        status
    })
    return response.json({
        success: true,
        data: seat,
        message: `Seat have been added`
    })
}
exports.updateseat = async (request, response) => {
    let seatID = request.params.seatID
    let { rowNum, seatNum, status } = request.body
    let seat = await seatModel.update({
        rowNum,
        seatNum,
        status
    }, {
        where: { seatID }
    })
    return response.json({
        success: true,
        data: seat,
        message: `Seat have been updated`
    })
}
exports.deleteseat = async (request, response) => {
    let seatID = request.params.seatID
    let seat = await seatModel.destroy({
        where: { seatID }
    })
    return response.json({
        success: true,
        data: seat,
        message: `Seat have been deleted`
    })
}