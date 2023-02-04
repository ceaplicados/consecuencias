import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './routes/users.js';
import nodes from './routes/nodes.js';

dotenv.config({ path: './server/.env' });

const app  = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const dbHost = process.env.MONGO_HOST;
const dbPort = process.env.MONGO_PORT;
const dbUser = process.env.MONGO_USER;
const dbPass = process.env.MONGO_PASS;
const dbName = process.env.MONGO_NAME;
const uri    = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection successful');
});

app.use('/users', users);
app.use('/nodes', nodes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
