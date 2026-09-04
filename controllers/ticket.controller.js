const seatModel = require(`../models/index`).seat
const userModel = require(`../models/index`).user
const eventModel = require(`../models/index`).event
const ticketModel = require(`../models/index`).ticket
const sequelize = require('../models/index').sequelize;

const Op = require(`sequelize`).Op

/** create function for add new ticket */
exports.addticket = async (request, response) => {
    /** prepare date for bookedDate */
    const today = new Date()
    const bookedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    /** prepare data from request */
    const { eventID, userID, seats } = request.body;

    try {
        // Create seat records for the chosen seats
        const seatIDs = await Promise.all(seats.map(async seat => {
          const { rowNum, seatNum } = seat;
          const createdSeat = await seatModel.create({
            eventID,
            rowNum,
            seatNum,
            status: 'true'
          });
          return createdSeat.seatID;
        }));
    
        // Create ticket records associating the chosen seats
        const tickets = await ticketModel.bulkCreate(seatIDs.map(seatID => ({
          eventID,
          userID,
          seatID,
          bookedDate
        })));
    
        response.status(201).json(tickets);
      } catch (error) {
        return response.json({
            success: false,
            message: error.message
        })
      }
}
/** create function for read all data */
exports.getallticket = async (request, response) => {
    try {
        // Ambil userID dan role dari payload JWT (diset oleh middleware auth)
        const userID = request.user.userID
        const role = request.user.role

        // Siapkan kondisi query dasar
        let condition = {}

        // Jika role BUKAN admin, batasi query hanya untuk userID yang sedang login
        if (role !== 'admin') {
            condition = { userID: userID }
        }

        // Jalankan query dengan kondisi terpisah
        let tickets = await ticketModel.findAll({
            where: condition,
            include: [
                { model: eventModel, attributes: ['eventName', 'eventDate', 'venue'] },
                { model: userModel, attributes: ['firstName', 'lastName', 'email'] },
                { model: seatModel, attributes: ['rowNum', 'seatNum'] },
            ]
        })

        return response.json({
            success: true,
            data: tickets,
            message: `Tiket berhasil dimuat`
        })
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        })
    }
}
exports.getMostPopularEvent = async (request, response) => {
    try {
        let popularEvent = await ticketModel.findAll({
            attributes: [
                'eventID',
                [sequelize.fn('COUNT', sequelize.col('ticket.eventID')), 'totalTicketsSold']
            ],
            include: [
                { 
                    model: eventModel, 
                    attributes: ['eventName', 'eventDate', 'venue']
                }
            ],
            group: ['ticket.eventID', 'event.eventID'], 
            order: [[sequelize.literal('totalTicketsSold'), 'DESC']], 
            limit: 1 
        })

        if (!popularEvent || popularEvent.length === 0) {
            return response.json({
                success: true,
                message: `Belum ada tiket yang terjual`,
                data: null
            })
        }

        return response.json({
            success: true,
            data: popularEvent[0],
            message: `Most popular event loaded successfully`
        })
    } catch (error) {
        return response.json({
            success: false,
            message: error.message
        })
    }
}
/** create function for filter ticket by ID */
exports.ticketByID = async (request, response) => {
    /** define ticketID to find data */
    let ticketID = request.params.id

    /** call findAll() within where clause and operation 
     * to find data based on ticketID  */
    let tickets = await ticketModel.findAll({
        where: {
            ticketID: { [Op.substring]: ticketID } 
        },
        include: [
            { model: eventModel, attributes: ['eventName','eventDate','venue']},
            { model: userModel, attributes: ['firstName', 'lastName','email']},
            { model: seatModel, attributes: ['rowNum', 'seatNum']},
        ]
    })
    return response.json({
        success: true,
        data: tickets,
        message: `All tickets have been loaded`
    })
}

exports.ticketByeventID = async (request, response) => {
    
    let eventID = request.params.id

    let tickets = await ticketModel.findAll({
        where: {
            eventID: { [Op.substring]: eventID }
        },
        include: [
            { model: eventModel, attributes: ['eventName','eventDate','venue']},
            { model: userModel, attributes: ['firstName', 'lastName','email']},
            { model: seatModel, attributes: ['rowNum', 'seatNum']},
        ]
    })
    return response.json({
        success: true,
        data: tickets,
        message: `All tickets have been loaded`
    })
}
    exports.ticketByuserID = async (request, response) => {
        
        let userID = request.params.id

        let tickets = await ticketModel.findAll({
            where: {
                userID: { [Op.substring]: userID }
            },
            include: [
                { model: eventModel, attributes: ['eventName','eventDate','venue']},
                { model: userModel, attributes: ['firstName', 'lastName','email']},
                { model: seatModel, attributes: ['rowNum', 'seatNum']},
            ]
        })
        return response.json({
            success: true,
            data: tickets,
            message: `All tickets have been loaded`
        })
}