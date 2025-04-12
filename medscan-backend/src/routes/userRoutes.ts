import { Router } from 'express';
import UserController from '../controllers/userController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();
const userController = new UserController();

// Public routes
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);

// Protected routes
router.use(authenticate);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;