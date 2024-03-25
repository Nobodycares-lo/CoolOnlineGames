const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Function to serve HTML files
    const serveHTML = (fileName) => {
        fs.readFile(path.join(__dirname, fileName), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    };

    // Routing logic based on request URL
    if (req.url === '/') {
        // Serve index.html for root path
        serveHTML('index.html');
    } else if (req.url === '/cog.html') {
        // Serve cog.html for /cog.html path
        serveHTML('cog.html');
    } else if (req.url === '/about.html') {
        // Serve about.html for /about.html path
        serveHTML('about.html');
    } else {
        // If the requested URL does not match any known route, send a 404 response
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

    console.log(`Server is running on port ${PORT}`);
});
