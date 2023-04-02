import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [process.env.CLIENT_URL as string],
  },
});

app.use(cors({ origin: [process.env.CLIENT_URL as string] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server.listen(process.env.PORT);

io.on('connection', (socket) => {
  socket.on('messages/send', (data) => {
    io.emit('messages/get', data);
  });
});
