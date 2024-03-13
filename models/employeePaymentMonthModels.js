import mongoose from 'mongoose'

const employeePaymentMonthSchema = mongoose.Schema({
    employeePaymentMonth: {
        type: String,
        required: true
    },
    isConfirmed: {
        type: Boolean,
        required: true
    },

})

export const EmployeePaymentMonth = mongoose.model('EmployeePaymentMonth', employeePaymentMonthSchema)