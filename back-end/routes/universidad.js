const { Router } = require('express')
const { createUniversity, getUniversities, updateUniversityByID} =
 require('../controllers/universidad')

const router = Router()

// crear
router.post('/', createUniversity)

// consultar todos
router.get('/', getUniversities)

//Actualizar 

router.put('/:id', updateUniversityByID)

module.exports = router;