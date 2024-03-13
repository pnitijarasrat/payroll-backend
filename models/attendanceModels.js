import mongoose from 'mongoose'

const attendanceSchema = mongoose.Schema({
    workDay: {
        type: String,
        required: true
    },
    absenceDay: {
        type: String,
        required: true
    },
    vacationDay: {
        type: String,
        required: true
    },
    sickDay: {
        type: String,
        required: true
    },
    businessLeaveDay: {
        type: String,
        required: true
    },
    vacationHour: {
        type: String,
        required: true
    },
    workHour: {
        type: String,
        required: true
    },
    otHour: {
        type: String,
        required: true
    },
    otHolidayHour: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    latestUpdate: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    }
})

export const Attendance = mongoose.model('Attendance', attendanceSchema)