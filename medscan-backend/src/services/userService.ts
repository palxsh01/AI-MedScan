import { User } from '../models/userModel';

export class UserService {
    async createUser(userData: any): Promise<User> {
        const user = new User(userData);
        return await user.save();
    }

    async getUser(userId: string): Promise<User | null> {
        return await User.findById(userId);
    }

    async updateUser(userId: string, updateData: any): Promise<User | null> {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }

    async deleteUser(userId: string): Promise<User | null> {
        return await User.findByIdAndDelete(userId);
    }

    async getAllUsers(): Promise<User[]> {
        return await User.find();
    }
}