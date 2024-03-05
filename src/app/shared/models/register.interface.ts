import { Gender, UserRole } from "./enum";

export interface Register {
    email: string;
    password: string;
    name: string,
    role: UserRole,
    gender: Gender | null
    phoneNumber: number
}
