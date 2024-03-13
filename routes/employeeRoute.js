import express from 'express';
import { Employee } from '../models/employeeModels.js';


const router = express.Router()
const error = (res, e) => (res.status(500).send({ message: e.message }))

router.get('/', async (req, res) => {
    try {
        const employee = await Employee.find({})

        return res.status(200).json({
            count: employee.length,
            data: employee
        })
    } catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const employee = await Employee.findById(id)

        return res.status(200).json(employee)
    } catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.post('/', async (req, res) => {
    try {
        if (!req.body) { return res.status(400).send({ message: 'Missing Field' }) }
        const newEmployee = req.body
        const employee = await Employee.create({ ...newEmployee })

        return res.status(201).send(newEmployee)
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
        const result = await Employee.findByIdAndUpdate(id, req.body)

        if (!result) { return res.status(404).json({ message: "Employee Not Found" }) }

        return res.status(201).send({ message: "Update Successfully" })
    }
    catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        if (!req.body) { return res.status(400).send({ message: 'Missing Field' }) }
        const { id } = req.params
        const result = await Employee.findByIdAndDelete(id, req.body)

        if (!result) { return res.status(404).json({ message: "Employee Not Found" }) }

        return res.status(201).send({ message: "Delete Successfully" })
    }
    catch (e) {
        console.log(e)
        error(res, e)
    }
})

export default router