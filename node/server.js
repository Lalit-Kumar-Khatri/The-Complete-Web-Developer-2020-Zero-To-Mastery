const http = require('http');

const server = http.createServer((request, response) => {
    console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)
    const user = {
        name: 'John',
        hobby: 'Skating'
    }

    // response.setHeader('Content-Type', 'text/html');
    // response.end('<h1>Helloooo</h1>');   

    response.setHeader('Content-Type' , 'application/json')
    response.end(JSON.stringify(user));
})

server.listen(3000);