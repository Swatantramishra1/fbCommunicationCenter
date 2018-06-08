const io = require('socket.io')();


function getTime() {

    let today = new Date()
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + "---" + today.getSeconds();

}

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer',
                getTime()
            );
        }, interval);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);