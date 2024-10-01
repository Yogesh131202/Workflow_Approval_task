const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute")

const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

app.use('/api/transactions', transactionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


  
