import express from 'express';
import healthrouter from './routes/health.routes';

const app = express(); 

app.use(express.json());

app.use('/health', healthrouter);

export default app;