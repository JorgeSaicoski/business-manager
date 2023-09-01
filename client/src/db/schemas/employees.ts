import Employee from '@/interfaces/Employee';
import mongoose, { Schema } from 'mongoose';


const employeeSchema = new Schema<Employee>({
  user_id: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});

const EmployeeModel = mongoose.model<Employee>('Employee', employeeSchema);

export default EmployeeModel;