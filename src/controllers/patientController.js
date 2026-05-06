const Patient = require('../models/patientModel');


const getPatient = async (req, res) =>  {
    try{
        const patientId = req.params.id;
        const patient = await Patient.findById(patientId).select("-_v");// exclude version key
        //console.log("Patient ID: ", patientId);
        if( !patient ){
            return res.status(404).json({ message: "Patient not found"});
        }

        res.json(patient);
    } catch( error ){
        res.status(500).json({ message: "Server error", error: error.message });
    }
    
};


const createPatient = async (req, res) => {
    try {
        const patient = new Patient(req.body);

        await patient.save();
        res.status(201).json({
            message: "Patient created successfully",
            id: patient._id,
            patient,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {getPatient, createPatient};