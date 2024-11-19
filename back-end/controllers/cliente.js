
const Clientes = require('../models/cliente')
const { request, response} = require('express')


// crear
const createCustomer = async (req = request, 
    res = response) => {
        try{
            const nombre = req.body.nombre 
                ? req.body.nombre.toUpperCase()
                : ''
            const email = req.body.email 
        
            const CustomersDB = await Clientes.findOne({nombre})//select * from clientes where nombre=?
            
            if(CustomersDB){
                return res.status(400).json({msg: 'Ya existe'})
            }
            const data = {
                nombre ,email // nombre: nombre
            }
            const clientes = new Clientes(data)
    
            await clientes.save()
            return res.status(201).json(clientes)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//listar todos
const getCustomers = async (req = request, 
    res = response) => {
        try{
            const { nombre } = req.query
            const CustomersDB = await Clientes.find()//select * from cliente 
            return res.json(CustomersDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateCustomerByID = async (req = request,
    res = response) => {
    try{
        const { id } = req.params
        const { nombre } = req.body
        const { email } = req.body
        const fechaActualizacion = new Date()
        const data = {nombre, email, fechaActualizacion}
        console.log(data)
        const clientes  = await Clientes.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(clientes)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }
}

module.exports = {createCustomer, getCustomers, updateCustomerByID}