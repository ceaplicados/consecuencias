const express  = require('express');
const path     = require('path');
const mongoose = require('mongoose');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

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

const usersRouter = require('./routes/users');
const nodesRouter = require('./routes/nodes');

app.use('/users', usersRouter);
app.use('/nodes', nodesRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
