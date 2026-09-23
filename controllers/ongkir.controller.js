
    const ongkirModel = require(`../models/index`).ongkir

const Op = require(`sequelize`).Op
exports.getallongkir = async (request, response) => {
    let ongkirs = await ongkirModel.findAll()
    return response.json({
        success: true,
        data: ongkirs,
        message: `All ongkirs have been loaded`
    })
}
exports.findongkir = async (request, response) => {
    let keyword = request.params.key
    let ongkirs = await ongkirModel.findAll({
        where: {
            [Op.or]: [
                {province_id: { [Op.substring]: keyword } },
                { subdistrict_id: { [Op.substring]: keyword } },
                { province: { [Op.substring]: keyword } },
                { city: { [Op.substring]: keyword } },
                { type: { [Op.substring]: keyword } },
                { subdistrict_name: { [Op.substring]: keyword } }

            ]
        }
    })
    return response.json({
        success: true,
        data: ongkirs,
        message: `Ongkir have been loaded`
    })
}
exports.addongkir = async (request, response) => {
    let {province_id, subdistrict_id, province, city, type, subdistrict_name, } = request.body
    let ongkir = await ongkirModel.create({
        province_id,
        subdistrict_id,
        province,
        city,
        type,
        subdistrict_name
    })
    return response.json({
        success: true,
        data: ongkir,
        message: `Ongkir have been added`
    })
}
exports.updateongkir = async (request, response) => {
    let id_ongkir = request.params.id_ongkir
    let { province_id, subdistrict_id, province, city, type, subdistrict_name, } = request.body
    let ongkir = await ongkirModel.update({
        province_id,
        subdistrict_id,
        province,
        city,
        type,
        subdistrict_name

    }, {
        where: { id_ongkir }
    })
    return response.json({
        success: true,
        data: ongkir,
        message: `Ongkir have been updated`
    })
}
exports.deleteongkir = async (request, response) => {
    let id_ongkir = request.params.id_ongkir
    let ongkir = await ongkirModel.destroy({
        where: { id_ongkir }
    })
    return response.json({
        success: true,
        data: ongkir,
        message: `Ongkir have been deleted`
    })
}