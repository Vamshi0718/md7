const http = require('http');

const parseCookies = (cookieHeader) => {
    const cookies = {};
    cookieHeader.split(';').forEach(cookie => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        cookies[name] = value;
    });
    return cookies;
};

const server = http.createServer((req, res) => {
    const cookies = req.headers.cookie ? parseCookies(req.headers.cookie) : {};
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Cookies received:\nName: ${cookies.name}\nEmail: ${cookies.email}`);
});

server.listen(8082, () => {  // Change the port number here
    console.log('Server is running on http://localhost:8082');
});
