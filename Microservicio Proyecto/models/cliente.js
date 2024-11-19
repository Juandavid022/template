
const {Schema, model} = require('mongoose')

const CustomerSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true, 'Nombre debe ser único']
    },
    email: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Clientes', CustomerSchema)
