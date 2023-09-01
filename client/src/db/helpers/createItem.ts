import  { Model, Document } from 'mongoose';

export async function createItem<T extends Document>(
  model: Model<T>,
  document: Partial<T>
): Promise<T | null> {
  try {
    const newItem = await model.create(document);
    return newItem;
  } catch (error) {
    console.error('Error creating item:', error);
    return null;
  }
}