import express from "express"
import { PORT, mongoDBUrl } from "./config.js"
import mongoose from 'mongoose'
import cors from 'cors'

import employeeRoute from './routes/employeeRoute.js'
import attendanceRoute from './routes/attendanceRoute.js'
import employeePaymentMonthRoute from './routes/employeePaymentMonthRoute.js'
import employeePaymentRoute from './routes/employeePaymentRoute.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    return response.status(234).send('welcome')
})

app.use('/employee', employeeRoute)
app.use('/attendance', attendanceRoute)
app.use('/salary', employeePaymentMonthRoute)
app.use('/employeePayment', employeePaymentRoute)

// 
// 
// 

mongoose
    .connect(mongoDBUrl)
    .then(() => {
        console.log('connected!')
        app.listen(PORT, () => {
            console.log(`App is listening to ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
