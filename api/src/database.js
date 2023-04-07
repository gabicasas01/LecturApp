import { connect } from 'mongoose';

const connectDB = async () => {
  try {
      const conn = await connect('mongodb://127.0.0.1:27017/LecturApp');
      console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;