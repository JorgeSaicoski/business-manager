import Project from '@/interfaces/Project';
import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
  client: { type: String, required: true },
  totalHours: { type: Number },
  employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
});

const ProjectModel = mongoose.model<Project>('Project', projectSchema);

export default ProjectModel;