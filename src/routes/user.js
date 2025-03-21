const express = require('express');
const UserController = require('../controllers/user');

const router = express.Router();

router.post('/', UserController.create);
router.get('/', UserController.read);
router.get('/:id', UserController.readOne);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;