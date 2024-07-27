const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./Routes/authRoutes');
const studentRoutes = require('./Routes/studentRoutes');
const imageRoutes = require('./Routes/imageRoutes');
const cardRoutes = require("./Routes/cardRoutes")
const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use('/api/image', imageRoutes);


app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/card',cardRoutes);

const PORT =5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
