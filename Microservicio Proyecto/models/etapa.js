
const {Schema, model} = require('mongoose')

const PhaseSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true, 'Nombre debe ser único']
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

module.exports = model('Etapas', PhaseSchema)
