const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Set-Cookie': ['name=Jasweer', 'email=jasweer@example.com'],
        'Content-Type': 'text/plain'
    });
    res.end('Cookies have been set');
});

server.listen(8081, () => {  // Change the port number here
    console.log('Server is running on http://localhost:8081');
});
