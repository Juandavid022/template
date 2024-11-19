const {Schema, model} = require('mongoose')

const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true, 'Nombre debe ser único']
    },
    direccion: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    telefono: {
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

module.exports = model('Universidad', UniversidadSchema)
