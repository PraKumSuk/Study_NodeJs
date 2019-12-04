const http = require('http');

const spkserver = http.createServer((request, response) => {
    // Service 1
    if (request.url === '/') {
        console.log('Received / request.....');
        response.write('Hello Boss');
        response.end();
    }

    // Service 2
    if (request.url === '/api/courses') {
        console.log('Received /api/courses request.....');
        response.write(JSON.stringify([1111, 222, 333]));
        response.end();
    }
});

spkserver.listen(3000);
console.log('Listening to port 3000......open a request at localhost:3000');