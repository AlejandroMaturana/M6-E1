const http = require('http');// 1. Importamos el módulo nativo http de Node.js

const server = http.createServer((req, res) => {// 2. Creamos el servidor
  
  res.writeHead(200, {// 3. Configuramos la respuesta
    'Content-Type': 'text/plain; charset=utf-8'
  });
  
  res.end('¡Hola Mundo!\n');// 4. Enviamos el contenido y cerramos
});

const PORT = 3000;// 5. Ponemos el servidor a escuchar peticiones

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log('Sigue el link adjunto arriba para ver el resultado en tu navegador');
});