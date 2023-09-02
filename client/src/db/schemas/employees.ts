import Employee from '@/interfaces/Employee';
import mongoose, { Schema } from 'mongoose';

interface EmployeeDB extends Document, Employee {}

const employeeSchema = new Schema<EmployeeDB>({
  user_id: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});

const EmployeeModel = mongoose.model<EmployeeDB>('Employee', employeeSchema);

export default EmployeeModel;