
const Proyectos = require('../models/proyecto')
const { request, response} = require('express')
const Cliente = require('../models/cliente')
const TipoProyecto = require('../models/tipoProyecto')
const Universidad = require('../models/universidad')
const Etapas = require('../models/etapa')


// crear
const createProject = async (req = request, 
    res = response) => {
        try{
            const data = req.body
            console.log(data)
            const { cliente, tipoProyecto, universidad, etapa } = data;
            //validando usuario
            const titulo = req.body.titulo 
            ? req.body.titulo.toUpperCase()
            : ''
        const projectDB = await Proyectos.findOne({titulo})//select * from proyecto where nombre=?
        
        if(projectDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
            // validando cliente
            const CustomerDB = Cliente.findOne({
                _id: cliente._id
            })// select * from cliente where _id=? and estado=true
            if(!CustomerDB){
                return res.status(400).json({msg: 'Cliente invalida'})
            }

            // validando tipo Proyecto
            const typeProjectDB = TipoProyecto.findOne({
                _id: tipoProyecto._id
            })// select * from estados where _id=? 
            if(!typeProjectDB){
               return res.status(400).json({msg: 'Tipo Proyecto invalido'})
            }

            // validando Universidad
            const universityDB = Universidad.findOne({
                _id: universidad._id
            
            })// select * from universidad where _id=?
            if(!universityDB){
               return res.status(400).json({msg: 'Universidad invalido'})
            }      

                        // validando Universidad
            const PhasesDB = Etapas.findOne({
                _id: etapa._id
            
            })// select * from etapa where _id=?
            if(!PhasesDB){
               return res.status(400).json({msg: 'Etapa invalida'})
            } 
            const project = new Proyectos(data)
    
            await project.save()            
            return res.status(201).json(project)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }   

}

//listar todos
const getProjects = async (req = request, 
    res = response) => {
        try{
            const { titulo } = req.query
            const ProyectDB = await Proyectos.find()//select * from etapas 
            return res.json(ProyectDB)
            
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateProjectByID = async (req = request,
    res = response) => {
    try{
        const { id } = req.params
        const { titulo } = req.body
        const { fechaInicio } = req.body
        const { fechaEntrega } = req.body
        const { valor } = req.body
        const fechaActualizacion = new Date()
        const data = {titulo,fechaInicio,fechaEntrega,valor, fechaActualizacion}
        console.log(data)
        const project  = await Proyectos.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(project)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }
}

module.exports = {createProject, getProjects, updateProjectByID}