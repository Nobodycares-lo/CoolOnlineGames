const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Check if the request URL is for the root path ('/')
    if (req.url === '/') {
        // Read the contents of index.html
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                // If an error occurs while reading the file, send a 500 (Internal Server Error) response
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                // Send the contents of index.html as the response
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        // If the request URL is not for the root path, send a 404 (Not Found) response
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 8080; // Use the provided PORT environment variable or default to 3000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
