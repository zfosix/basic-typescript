import express, { Application } from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todo.routes';

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', todoRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});