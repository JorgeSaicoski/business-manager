import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI must be defined');
}

mongoose.set('strictQuery', false);

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI, {
      user: 'admin',
      pass: '3^9r4$f$o7k*TSk9rJBWbh',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('-----------------------');
    console.log('MONGO CONNECTED');
    console.log(mongoose.connection.host);
    console.log(`${MONGODB_URI}`);
    console.log('-----------------------');
  } catch (error) {
    console.error(error);
  }
};








