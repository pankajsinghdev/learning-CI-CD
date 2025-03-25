import { WebSocketServer } from "ws";

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", (socket: WebSocket) => {
  socket.send("Web socket connected successfully.");
});
