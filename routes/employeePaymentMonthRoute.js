import express from 'express';
import { EmployeePaymentMonth } from '../models/employeePaymentMonthModels.js'

const router = express.Router()
const error = (res, e) => (res.status(500).send({ message: e.message }))

router.get('/', async (req, res) => {
    try {
        const employeePaymentMonth = await EmployeePaymentMonth.find({})

        return res.status(200).json({
            count: employeePaymentMonth.length,
            data: employeePaymentMonth
        })
    } catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const employeePaymentMonth = await EmployeePaymentMonth.findById(id)

        return res.status(200).json(employeePaymentMonth)
    } catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.post('/', async (req, res) => {
    try {
        if (!req.body) { return res.status(400).send({ message: 'Missing Field' }) }
        const newEmployeePaymentMonth = req.body
        const employee = await EmployeePaymentMonth.create({ ...newEmployeePaymentMonth })

        return res.status(201).send(newEmployeePaymentMonth)
    }
    catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.put('/:id', async (req, res) => {
    try {
        if (!req.body) { return res.status(400).send({ message: 'Missing Field' }) }
        const { id } = req.params
        const result = await EmployeePaymentMonth.findByIdAndUpdate(id, req.body)

        if (!result) { return res.status(404).json({ message: "EmployeePaymentMonth Not Found" }) }

        return res.status(201).send({ message: "Update Successfully" })
    }
    catch (e) {
        console.log(e)
        error(res, e)
    }
})

// router.delete('/:id', async (req, res) => {
//     try {
//         if (!req.body) { return res.status(400).send({ message: 'Missing Field' }) }
//         const { id } = req.params
//         const result = await EmployeePaymentMonth.findByIdAndDelete(id, req.body)

//         if (!result) { return res.status(404).json({ message: "EmployeePaymentMonth Not Found" }) }

//         return res.status(201).send({ message: "Delete Successfully" })
//     }
//     catch (e) {
//         console.log(e)
//         error(res, e)
//     }
// })

export default router