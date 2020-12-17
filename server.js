const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/user', require('./config/routes/api/user'));
app.use('/api/auth', require('./config/routes/api/auth'));
app.use('/api/profile', require('./config/routes/api/profile'));
app.use('/api/posts', require('./config/routes/api/posts'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));