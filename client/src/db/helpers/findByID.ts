import { Model, Document, Types } from 'mongoose';

export async function findById<T extends Document>(
  model: Model<T>,
  id: Types.ObjectId
): Promise<T | null> {
  try {
    const item = await model.findById(id);
    return item;
  } catch (error) {
    console.error('Error finding item by ID:', error);
    return null;
  }
}