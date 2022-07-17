const http = require('http');

const server = http.createServer((req, res) => {

	if(req.url == '/'){
		res.write('Welcome to my our page');
		res.end();
	}
	if(req.url == '/about'){
		res.end('This is about us page');
	}
	res.end(`
		<h1>Ooops!</h1>
		<p>404, Page not found</p>
		<a href="/">Back</a>
		`);
});

server.listen({
	'host':'localhost',
	'port':8080,
}, function(args) {
	// body
	console.log('server is ready to accept requests');
	console.log(args);
});