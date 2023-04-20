require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");
const messagesRouter = require("./routes/messages");
const port = 7000;

app.use(express.json());
app.use(cors());
app.use("/", messagesRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
