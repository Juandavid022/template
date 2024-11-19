const { Router } = require('express')
const { createTypeProyect, getTypeProyects, updateTypeProjectByID} =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTypeProyect)

// consultar todos
router.get('/', getTypeProyects)

//Actualizar 

router.put('/:id', updateTypeProjectByID)

module.exports = router;