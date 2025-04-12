import axios from 'axios';

const MEDICAL_API_URL = 'https://api.infermedica.com/v3'; // Replace with the actual API URL
const API_KEY = process.env.MEDICAL_API_KEY;

export const getDiagnosis = async (symptoms: string[]) => {
    try {
        const response = await axios.post(
            `${MEDICAL_API_URL}/diagnosis`,
            {
                sex: 'male', // Replace with dynamic input
                age: 30, // Replace with dynamic input
                evidence: symptoms.map((symptom) => ({
                    id: symptom,
                    choice_id: 'present',
                })),
            },
            {
                headers: {
                    'App-Id': process.env.MEDICAL_APP_ID,
                    'App-Key': API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error fetching diagnosis:', error);
        throw new Error('Failed to fetch diagnosis from the medical API.');
    }
};