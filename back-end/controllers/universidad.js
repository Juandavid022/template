
const Universidad = require('../models/universidad')
const { request, response} = require('express')


// crear
const createUniversity = async (req = request, 
    res = response) => {
        try{
            const nombre = req.body.nombre 
                ? req.body.nombre.toUpperCase()
                : ''
            const direccion = req.body.direccion 
            const telefono = req.body.telefono 

            const UniversityDB = await Universidad.findOne({nombre})//select * from universidad where nombre=?
            
            if(UniversityDB){
                return res.status(400).json({msg: 'Ya existe'})
            }
            const data = {
                nombre ,direccion,telefono // nombre: nombre
            }
            const universidad = new Universidad(data)
    
            await universidad.save()
            return res.status(201).json(universidad)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//listar todos
const getUniversities = async (req = request, 
    res = response) => {
        try{
            const { nombre } = req.query
            const UniversityDB = await Universidad.find()//select * from universidad 
            return res.json(UniversityDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateUniversityByID = async (req = request,
    res = response) => {
    try{
        const { id } = req.params
        const { nombre } = req.body
        const { direccion } = req.body
        const { telefono } = req.body
        const fechaActualizacion = new Date()
        const data = {nombre, direccion, telefono, fechaActualizacion}
        console.log(data)
        const universidad  = await Universidad.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(universidad)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }
}

module.exports = {     createUniversity, 
    getUniversities,
    
    updateUniversityByID}