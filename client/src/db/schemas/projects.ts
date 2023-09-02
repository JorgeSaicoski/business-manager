import Project from '@/interfaces/Project';
import mongoose, { Schema, Document } from 'mongoose';

interface ProjectDB extends Document, Project {}

const projectSchema = new Schema<ProjectDB>({
  name: { type: String, required: true },
  client: { type: String, required: true },
  totalHours: { type: Number },
  employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
});

const ProjectModel = mongoose.model<ProjectDB>('Project', projectSchema);

export { ProjectModel };
export type { ProjectDB }