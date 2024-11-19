
const {Schema, model} = require('mongoose')

const ProjectSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'Titulo requerido'],
        unique: [true, 'Titulo debe ser único']
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaEntrega: {
        type: Date,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo Proyecto',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
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

module.exports = model('Proyectos', ProjectSchema)
