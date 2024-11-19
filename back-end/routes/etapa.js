const { Router } = require('express')
const { createPhase, getPhases, updatePhaseByID} =
 require('../controllers/etapa')

const router = Router()

// crear
router.post('/', createPhase)

// consultar todos
router.get('/', getPhases)

//Actualizar 

router.put('/:id', updatePhaseByID)

module.exports = router;