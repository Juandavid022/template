
const Etapas = require('../models/etapa')
const { request, response} = require('express')


// crear
const createPhase = async (req = request, 
    res = response) => {
        try{
            const nombre = req.body.nombre 
                ? req.body.nombre.toUpperCase()
                : ''
                
            const PhasesDB = await Etapas.findOne({nombre})//select * from etapas where nombre=?
            
            if(PhasesDB){
                return res.status(400).json({msg: 'Ya existe'})
            }
            const data = {
                nombre  // nombre: nombre
            }
            const etapas = new Etapas(data)
    
            await etapas.save()
            return res.status(201).json(etapas)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//listar todos
const getPhases = async (req = request, 
    res = response) => {
        try{
            const { nombre } = req.query
            const PhasesDB = await Etapas.find()//select * from etapas 
            return res.json(PhasesDB)
            
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updatePhaseByID = async (req = request,
    res = response) => {
    try{
        const { id } = req.params
        const { nombre } = req.body
        const fechaActualizacion = new Date()
        const data = {nombre, fechaActualizacion}
        console.log(data)
        const etapas  = await Etapas.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(etapas)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }
}

module.exports = {createPhase, getPhases, updatePhaseByID}