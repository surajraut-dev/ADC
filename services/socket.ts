import { Server } from "socket.io";

const io = new Server(3001, { cors: { origin: "*" } });

io.on("connection", (socket:any) => {
  console.log("Client connected");

  // Simulate delivery person location updates
  setInterval(() => {
    const lat = 19.2183 + Math.random() * 0.01;
    const lng = 72.9781 + Math.random() * 0.01;
    socket.emit("locationUpdate", { lat, lng });
  }, 5000);
});
