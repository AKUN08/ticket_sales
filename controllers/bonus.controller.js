const { request } = require("express")

    const bonusModel = require(`../models/index`).bonus

const Op = require(`sequelize`).Op
exports.getallbonus = async (request, response) => {
    let bonuses = await bonusModel.findAll()
    return response.json({
        success: true,
        data: bonuses,
        message: `All bonuses have been loaded`
    })
}
exports.findbonus = async (request, response) => {
    let keyword = request.params.key
    let bonuses = await bonusModel.findAll({
        where: {
            [Op.or]: [
                { id_bonus: { [Op.substring]: keyword } },
                { nama_bonus: { [Op.substring]: keyword } },
                { nominal: { [Op.substring]: keyword } },
                { tanggal_berlaku: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true,
        data: bonuses,
        message: `Bonus have been loaded`
    })
}
exports.addbonus = async (request, response) => {
    let {nama_bonus, nominal, tanggal_berlaku } = request.body
    let bonus = await bonusModel.create({
        nama_bonus,
        nominal,
        tanggal_berlaku
    })
    return response.json({
        success: true,
        data: bonus,
        message: `Bonus have been added`
    })
}
exports.updatebonus = async (request, response) => {
    let id_bonus = request.params.id_bonus
    let { nama_bonus, nominal, tanggal_berlaku } = request.body
    let bonus = await bonusModel.update({
        nama_bonus,
        nominal,
        tanggal_berlaku
    }, {
        where: { id_bonus }
    })
    return response.json({
        success: true,
        data: bonus,
        message: `Bonus have been updated`
    })
}
exports.deletebonus = async (request, response) => {
    let id_bonus = request.params.id_bonus
    let bonus = await bonusModel.destroy({
        where: { id_bonus }
    })
    return response.json({
        success: true,
        data: bonus,
        message: `Bonus have been deleted`
    })
}