import Employee from "@/models/Employee";

interface User {
    id: string;
    username: string;
    name: string;
    password: string;
    emplooye: Employee
}

export default User;