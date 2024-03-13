import express from 'express';
import { Attendance } from '../models/attendanceModels.js';

const router = express.Router()
const error = (res, e) => (res.status(500).send({ message: e.message }))

router.get('/', async (req, res) => {
    try {
        const attendance = await Attendance.find({})

        return res.status(200).json({
            count: attendance.length,
            data: attendance
        })
    } catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params

        const attendance = await Attendance.findById(id)

        return res.status(200).json(attendance)
    } catch (e) {
        console.log(e)
        error(res, e)
    }
})

router.post('/', async (req, res) => {
    try {
        if (!req.body) { return res.status(400).send({ message: 'Missing Field' }) }
        const newAttendanceArray = []
        for (let i = 0; i < req.body.length; i++) {
            const newAttendance = req.body[i]
            const attendance = await Attendance.create({ ...newAttendance })
            newAttendanceArray.push(attendance)
        }

        return res.status(201).send(newAttendanceArray)
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
            const result = await Employee.findByIdAndUpdate(id, req.body)

            if (!result) { return res.status(404).json({ message: "Employee Not Found" }) }
        }

        return res.status(201).send({ message: "Update Successfully" })
    }
    catch (e) {
        console.log(e)
        error(res, e)
    }
})

// may not need delete

// router.delete('/:id', async (req, res) => {
//     try {
//         if (!req.body) { return res.status(400).send({ message: 'Missing Field' }) }
//         const { id } = req.params
//         const result = await Employee.findByIdAndDelete(id, req.body)

//         if (!result) { return res.status(404).json({ message: "Employee Not Found" }) }

//         return res.status(201).send({ message: "Delete Successfully" })
//     }
//     catch (e) {
//         console.log(e)
//         error(res, e)
//     }
// })

export default router