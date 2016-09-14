var http = require("http")
//require fs
var fs = require("fs")
//get out url and create an if'else statemtn form diff urls
//use fs to read out index.html
//write data from index
//if the html has links/scrips 
//setting up at server
var server =
http.createServer(function(request, response){
	//get url
	var url =request.url;//
	//if'else statemtn form diff urls
	if(url === '/') {
		fs.readFile('index.html', function(err, data) {
            response.write(data.toString());
            response.end();

		})
		//todo:read out index and write to our browser
	} else if (url === '/page-2')  {
			fs.readFile('page-2.html', function(err, data) {
            response.write(data.toString());
            response.end();

		})
	} else if (url === '/page-3')  {
			fs.readFile('page-3.html', function(err, data) {
            response.write(data.toString());
            response.end();

		});
	} else if( url === '/main.css'){
		fs.readFile('main.css', function(err,data){
			response.write(data.toString());
			response.end();
		})
	}
	else {
		//display error page
		response.write('<h1>404</h1>');
        response.end();
	}
	
})
server.listen(3000)

