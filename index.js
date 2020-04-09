
const express = require('express');
const connectDB =require('./config/dev');



const app = express();

// connect Database
connectDB();


const port = process.env.PORT || 3002;

app.listen(port, () => {
     console.log(`Server Lising on port ${port}`);
})