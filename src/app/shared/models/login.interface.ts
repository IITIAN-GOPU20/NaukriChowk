import { UserRole } from "./enum";

export interface Login {
    email: string;
    password: string;
    role: UserRole
}