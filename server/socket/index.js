const { Server } = require('socket.io');

const socketSetup = (server) => {
  const io = new Server(server, {
    cors: { origin: '*' },
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('sendMessage', (data) => {
      io.emit('receiveMessage', data); // Broadcast to all clients
    });

    socket.on('typing', (user) => {
      socket.broadcast.emit('typing', user); // Notify others
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

module.exports = socketSetup;
