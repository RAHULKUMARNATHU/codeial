module.exports.chatSockets = function(socketServer){
    // let io = require('socket.io')(socketServer);
    const Server = require('socket.io');
    //It will be handling the connections
    let io = Server(socketServer, {
        // Fixing the cors issue
        cors: {
            origin: "http://localhost:8000"
        }
    });



    io.sockets.on('connection' , function(socket){
        console.log('new connection received', socket.id);
    

        socket.on('disconnect', function(){
            console.log('socket disconnected!')
        });

        socket.on('join_room' , function(data){
            console.log('joining ewquest rec.',data);

            socket.join(data.chatroom);

            io.in(data.chatroom).emit('user_joined',data);

        })
    });

    
}