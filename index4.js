const http = require('http');

const colors = require('colors');

/* http.createServer(function (req, res){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo!</h1>');
    res.end();
}).listen(3000); */

// Una mejor manera de hacerlo, separando el handleServer.

const handleServer = function (req, res){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo!</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function (){
    console.log('Server on port 3000'.rainbow);
})

// npm init : me permit inicializar al proyecto con las dependencias package.json
// node_modules no se sube al repositorio y el package.json genera el despliegue
// utilizando el "npm install"

// npm start "loQueSeDefinaEnPackage.json"
// npm run accionScriptQueSeDefinaEnPackage.json



