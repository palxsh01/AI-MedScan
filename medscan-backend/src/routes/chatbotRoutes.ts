import express from 'express';
import { getChatbotDiagnosis } from '../controllers/chatbotController';

const router = express.Router();

// POST /api/chatbot/diagnosis
router.post('/diagnosis', getChatbotDiagnosis);

export default router;