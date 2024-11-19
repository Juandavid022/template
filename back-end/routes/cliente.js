const { Router } = require('express')
const { createCustomer, getCustomers, updateCustomerByID} =
 require('../controllers/cliente')

const router = Router()

// crear
router.post('/', createCustomer)

// consultar todos
router.get('/', getCustomers)

//Actualizar 

router.put('/:id', updateCustomerByID)

module.exports = router;