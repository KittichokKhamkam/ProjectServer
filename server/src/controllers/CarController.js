const { Car } = require('../models')
module.exports = {

    // get all car
    async index(req, res) {
        try {
            const car = await Car.findAll()
            res.send(car)
        } catch (err) {
            res.status(500).send({
                error: 'The car information was incorrect'
            })
        }
    },
    // create car
    async create(req, res) {
        // res.send(JSON.stringify(req.body))
        try {
            const car = await Car.create(req.body)
            res.send(car.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create car incorrect'
            })
        }
    },
    // edit car, suspend, active
    async put(req, res) {
        try {
            await Car.update(req.body, {
                where: {
                    id: req.params.carId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update car incorrect'
            })
        }
    },
    // delete car
    async remove(req, res) {
        try {
            const car = await Car.findOne({
                where: {
                    id: req.params.carId
                }
            })
            if (!car) {
                return res.status(403).send({
                    error: 'The car information was incorrect'
                })
            }
            await car.destroy()
            res.send(car)
        } catch (err) {
            res.status(500).send({
                error: 'The car information was incorrect'
            })
        }
    },
    // get car by id
    async show(req, res) {
        try {
            const car = await Car.findByPk(req.params.carId)
            res.send(car)
        } catch (err) {
            req.status(500).send({
                error: 'The car information was incorrect'
            })
        }
    }
}
