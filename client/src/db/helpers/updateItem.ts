import { Model, Document } from 'mongoose';


export async function updateItem<T extends Document>(
  model: Model<T>,
  itemId: string,
  updateData: Partial<T>
): Promise<T | null> {
  try {
    const updatedItem = await model.findByIdAndUpdate(itemId, updateData, {
      new: true, 
      runValidators: true, 
    });
    return updatedItem;
  } catch (error) {
    console.error('Error updating item:', error);
    return null;
  }
}