require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");
const messagesRouter = require("./routes/messages");
const port = 7000;
//socketIO
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "https://chat-app-live.onrender.com",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());
app.use("/", messagesRouter);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("newMessage", (data) => {
    console.log("New message received:", data);
    io.emit("newMessage", data);
  });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    server.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
