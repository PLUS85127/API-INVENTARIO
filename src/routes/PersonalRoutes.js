const express = require('express');
const router = express.Router();
const PersonalController = require('../controllers/PersonalController');

router.post('/personal', PersonalController.createPersonal);
router.get('/personal', PersonalController.getAllPersonal);
router.get('/personal/:id', PersonalController.getPersonalById);
router.put('/personal/:id', PersonalController.updatePersonal);
router.delete('/personal/:id', PersonalController.deletePersonal);

module.exports = router;
