import app from "./app";
import connectDB from './database';

connectDB();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server on port, http://localhost:${port}`);
});