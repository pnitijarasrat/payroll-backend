import mongoose from 'mongoose'

const employeePaymentSchema = mongoose.Schema({
    employeePaymentMonth: {
        type: String,
        required: true
    },

})

export const EmployeePayment = mongoose.model('EmployeePayment', employeePaymentSchema)