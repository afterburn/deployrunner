const http = require('http')

class HttpServer {
  constructor () {
    this.socket = http.createServer((req, res) => this.handleRequest(req, res));
    this.socket.on('clientError', (err, socket) => {
      socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    });
    this.routes = {}
  }

  handleRequest (req, res) {
    if (this.routes.hasOwnProperty(req.url)) {
      this.routes[req.url](req, res);
    } else {
      res.end('404');
    }
  }

  listen (port, callback = () => {}) {
    this.socket.listen(port, () => callback());
  }

  get (pattern, callback) {
    this.routes[pattern] = callback;
  }
}

function httpserve () {
  return new HttpServer();
}

module.exports = httpserve;