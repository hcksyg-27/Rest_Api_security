const express = require('express');
const { getPatient, createPatient } = require('../controllers/patientController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const { validatePatientId , validatePatientCreate} = require('../middleware/validateRequest.js');
const limiter = require('../middleware/rateLimiter.js')
const router = express.Router();

router.post("/", authMiddleware, validatePatientCreate, createPatient);
//router.get("/:id", authMiddleware,validatePatientId,getPatient);
router.get("/:id",limiter,validatePatientId,getPatient);

module.exports = router;