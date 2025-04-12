import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public createUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const userData = req.body;
            const newUser = await this.userService.createUser(userData);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating user', error });
        }
    };

    public getUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const userId = req.params.id;
            const user = await this.userService.getUser(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving user', error });
        }
    };

    public updateUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updatedUser = await this.userService.updateUser(userId, userData);
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json({ message: 'Error updating user', error });
        }
    };

    public deleteUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const userId = req.params.id;
            const result = await this.userService.deleteUser(userId);
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting user', error });
        }
    };
}

export default UserController;