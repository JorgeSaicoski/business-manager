import { Model, Document, Types } from 'mongoose';


export async function updateItem<T extends Document>(
  model: Model<T>,
  id: Types.ObjectId,
  updateData: Partial<T>
): Promise<T | null> {
  try {
    const updatedItem = await model.findByIdAndUpdate(id, updateData, {
      new: true, 
      runValidators: true, 
    });
    return updatedItem;
  } catch (error) {
    console.error('Error updating item:', error);
    return null;
  }
}