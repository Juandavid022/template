const tipoProyecto = require('../models/tipoProyecto')
const TipoProyecto = require('../models/tipoProyecto')
const { request, response} = require('express')

// crear
const createTypeProyect = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const typeProjectDB = await TipoProyecto.findOne({nombre})//select * from tipoProyecto where nombre=?
        
        if(typeProjectDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const tipoProyecto = new TipoProyecto(data)

        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getTypeProyects = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const typeProjectDB = await TipoProyecto.find()//select * from tipoProyecto 
            return res.json(typeProjectDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateTypeProjectByID = async (req = request,
    res = response) => {
    try{
        const { id } = req.params
        const { nombre } = req.body
        const fechaActualizacion = new Date()
        const data = {nombre, fechaActualizacion}
        console.log(data)
        const tipoProyecto  = await TipoProyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(tipoProyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }
}

module.exports = {     createTypeProyect, 
    getTypeProyects,
    updateTypeProjectByID}