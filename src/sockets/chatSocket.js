import { Server } from "socket.io";

function connectionSocket(server) {
    const io = new Server(server);

    io.on("connection", (socket) => {
        console.log("Um usuário se conectou.");

        socket.on("disconnect", () => {
            console.log("Um usuário se desconectou.");
        });
    });
};

export default connectionSocket;