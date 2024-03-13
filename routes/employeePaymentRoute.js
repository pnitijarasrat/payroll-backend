import express from 'express';
import { EmployeePayment } from '../models/employeePaymentModels.js';


const router = express.Router()
const error = (res, e) => (res.status(500).send({ message: e.message }))

router.get('/', async (req, res) => {
    try {
        const employeePayment = await EmployeePayment.find({})

        return res.status(200).json({
            count: employeePayment.length,
            data: employeePayment
        })
    } catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const employeePayment = await EmployeePayment.findById(id)

        return res.status(200).json(employeePayment)
    } catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.post('/', async (req, res) => {
    try {
        if (!req.body) { return res.status(400).send({ message: 'Missing Field' }) }
        const employeePaymentArray = []
        for (let i = 0; i < req.body.length; i++) {
            const newEmployeePayment = req.body
            const employeePayment = await EmployeePayment.create({ ...newEmployeePayment })
            employeePaymentArray.push(employeePayment)
        }


        return res.status(201).send(employeePaymentArray)
    }
    catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.put('/update', async (req, res) => {
    try {
        if (!req.body) { return res.status(400).send({ message: 'Missing Field' }) }

        for (let i = 0; i < req.body.length; i++) {
            const { id } = req.body[i]._id
            const result = await EmployeePayment.findByIdAndUpdate(id, req.body)
            if (!result) { return res.status(404).json({ message: "EmployeePayment Not Found" }) }
        }


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