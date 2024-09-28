import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/testDB';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable.');
}

async function dbConnect() {
    await mongoose.connect(MONGODB_URI)
}

export default dbConnect;
