import { Model, Document } from 'mongoose';

export async function getAll<T extends Document>(
  model: Model<T>,
  conditions: Record<string, any> = {},
  projection: Record<string, any> = {},
  options: Record<string, any> = {}
): Promise<T[]> {
  try {
    const items = await model.find(conditions, projection, options);
    return items;
  } catch (error) {
    console.error('Error getting all items:', error);
    return [];
  }
}