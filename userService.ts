export type CreateUser = {
    name: string;
    email: string;
}

class UserService {
    async createUser(userData: CreateUser) {
        if (!userData.email.includes("@")) {
            throw new Error("Invalid email");
        }
        return { id: "123", ...userData };
    }
}

export { UserService };