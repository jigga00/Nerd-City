const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const { authenticateUser } = require('./middleware/auth');

mongoose.connect('mongodb://localhost:27017/nerd-city', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/users', authenticateUser, userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
