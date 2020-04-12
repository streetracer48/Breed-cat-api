const express = require('express');
const bodyParser= require('body-parser');
const connectDB =require('./config/dev');

const breedRoutes = require('./routes/breed');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(cors({
     credentials: true,
   }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect Database
connectDB();

app.use('/api/v1/breeds', breedRoutes);


const port = process.env.PORT || 3002;

app.listen(port, () => {
     console.log(`Server Lising on port ${port}`);
})