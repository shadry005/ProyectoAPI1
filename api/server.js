const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

const sampleData = [
  { id: 1, name: 'Producto A', price: 10.5 },
  { id: 2, name: 'Producto B', price: 7.25 },
  { id: 3, name: 'Producto C', price: 12.0 }
];

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  if (parsed.pathname === '/api/catalogo' && req.method === 'GET') {
    const body = JSON.stringify(sampleData);
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body)
    });
    res.end(body);
    return;
  }

  // Health check
  if (parsed.pathname === '/health' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');
    return;
  }

  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`API server listening on http://0.0.0.0:${PORT}`);
});
