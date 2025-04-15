import express from 'express';

// Use require to import the JavaScript file
const { symptomDatabase, medicationDatabase } = require('../../databases.js');

const router = express.Router();

// Symptom Checker Endpoint
router.post('/symptom-check', (req, res) => {
    const { symptoms } = req.body;

    if (!symptoms || !Array.isArray(symptoms)) {
        return res.status(400).json({ message: 'Symptoms must be provided as an array.' });
    }

    const matchingDiseases = symptomDatabase
        .map((entry) => {
            const matchCount = entry.symptoms.filter((symptom) => symptoms.includes(symptom.toLowerCase())).length;
            return { disease: entry.disease, matchCount };
        })
        .filter((entry) => entry.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount)
        .slice(0, 2); // Return top 2 diseases

    res.json({ diseases: matchingDiseases });
});

// Medication Lookup Endpoint
router.post('/medication-lookup', (req, res) => {
    const { medication } = req.body;

    if (!medication || typeof medication !== 'string') {
        return res.status(400).json({ message: 'Medication name must be provided as a string.' });
    }

    const matchingMedication = medicationDatabase.find(
        (entry) => entry.name.toLowerCase() === medication.toLowerCase()
    );

    if (matchingMedication) {
        res.json({ medication: matchingMedication });
    } else {
        res.status(404).json({ message: 'Medication not found.' });
    }
});

export default router;