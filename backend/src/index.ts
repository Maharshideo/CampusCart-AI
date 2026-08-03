import app from './app';
import { connectDatabase } from './config/database';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  const isDbConnected = await connectDatabase();

  if (!isDbConnected) {
    console.warn('Continuing without database connection. Some endpoints may fail until MongoDB is reachable.');
  }

  app.listen(PORT, () => {
    console.log(`CampusCart API server running on port ${PORT}`);
  });
};

startServer();
