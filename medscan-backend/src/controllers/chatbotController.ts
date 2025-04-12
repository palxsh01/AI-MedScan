import { Request, Response } from 'express';
import { getDiagnosis } from '../services/chatbotService';

export const getChatbotDiagnosis = async (req: Request, res: Response) => {
    try {
        const { symptoms } = req.body;

        // Validate symptoms input
        if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
            return res.status(400).json({ message: 'Symptoms must be provided as a non-empty array.' });
        }

        // Call the service to get the diagnosis
        const diagnosis = await getDiagnosis(symptoms);

        // Check if the diagnosis is valid
        if (!diagnosis || Object.keys(diagnosis).length === 0) {
            return res.status(404).json({ message: 'No diagnosis found for the provided symptoms.' });
        }

        // Return the diagnosis
        return res.status(200).json(diagnosis);
    } catch (error: any) {
        console.error('Error in getChatbotDiagnosis:', error.message || error);

        // Handle specific errors (e.g., API errors)
        if (error.response && error.response.status) {
            return res.status(error.response.status).json({ message: error.response.data || 'Error from medical API.' });
        }

        // Handle unexpected errors
        return res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
    }
};