const router = require('express').Router();
const { User } = require('../../models');

//GET /api/users
router.get('/', (req, res) => { });

//GET /api/users/1
router.get('/:id', (req, res) => { });

//POST /api/users
router.post('/', (req, res) => { });

//PUT /api/users
router.put('/:id', (req, res) => { });

//DELTE /api/users
router.delete('/:id', (req, res) => { });


module.exports = router;