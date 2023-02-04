import express from 'express';
import users from './routes/users.js';
import nodes from './routes/nodes.js';

const app = express();

app.use(express.json());

app.use('/api/v1/users', users);
app.use('/api/v1/nodes', nodes);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

export default app;
