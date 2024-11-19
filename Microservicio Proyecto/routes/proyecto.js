const { Router } = require('express')
const {createProject, getProjects, updateProjectByID} =
 require('../controllers/proyecto')

const router = Router()

// crear
router.post('/', createProject)

// consultar todos
router.get('/', getProjects)

//Actualizar 

router.put('/:id', updateProjectByID)

module.exports = router;