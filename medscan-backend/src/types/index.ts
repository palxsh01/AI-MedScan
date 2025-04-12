// This file exports TypeScript interfaces and types used throughout the application.

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthPayload {
    userId: string;
    username: string;
    email: string;
}