import Project from "./Project";

interface Employee {
    user_id: string;
    name: string;
    position: string;
    projects:Project[];
}

export default Employee;