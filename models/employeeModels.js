import mongoose from 'mongoose'

const employeeSchema = mongoose.Schema({
    titleTh: {
        type: String,
        required: true
    },
    nameTh: {
        type: String,
        required: true
    },
    lastNameTh: {
        type: String,
        required: true
    },
    titleEng: {
        type: String,
        required: true
    },
    nameEng: {
        type: String,
        required: true
    },
    lastNameEng: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    citizenId: {
        type: String,
        required: true
    },
    socialId: {
        type: String,
        required: true
    },
    staffId: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    salaryRule: {
        type: String,
        required: true
    },
    bankId: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    branchId: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    accountName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
})

export const Employee = mongoose.model('Employee', employeeSchema)