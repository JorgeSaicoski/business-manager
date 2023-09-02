import { Document } from "mongoose";
import Employee from "./Employee";

interface Project extends Document {
    name: string;
    client: string;
    totalHours?: number;
    employees: Employee[];
}

export default Project;
