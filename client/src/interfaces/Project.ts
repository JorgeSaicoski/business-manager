import Employee from "./Employee";

interface Project {
    name: string;
    client: string;
    totalHours?: number;
    employees: Employee[];
}

export default Project;
