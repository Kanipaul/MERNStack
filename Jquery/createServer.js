var http = require("http");

var fs = require("fs");

var server = http.createServer(function(request,response) {

  var url = request.url;

  switch (url) {
    
    case '/' :
    case '/Population' :

        getStaticFileContent(response, 'Population.html','text/html');

      break;

      case '/GDP' :

          getStaticFileContent(response, 'GDP.html','text/html');

        break;

        case '/PurchasingPower' :

            getStaticFileContent(response, 'PurchasingPower.html','text/html');

          break;

    case '/css/style.css' :

      getStaticFileContent(response,'css/style.css','text/css');

      break;

      case '/css/popbox.css' :

        getStaticFileContent(response,'css/popbox.css','text/css');

        break;

    case '/js/popbox.js' :

      getStaticFileContent(response,'js/popbox.js','application/x-javascript');

      break;

      case '/js/popbox.min.js' :

        getStaticFileContent(response,'js/popbox.min.js','application/x-javascript');

        break;

    default:

      response.writeHead(404,{'Content-Type':'text/plain'});

      response.end('404 - Page not found');

  }
  if(request.url=='/addNewAgePopulation' && request.method == 'POST'){

            console.log("[200] " + request.method + " to " + request.url);

           request.on('data', function(chunk) {

             console.log("Received body data:");

             console.log(chunk.toString());

           });
           request.on('end', function() {
           var body = fs.readFileSync('index.html');
           response.writeHead(200, "OK", {'Content-Type': 'text/html'});
           response.end(body.toString());

           });
  }


}).listen(8080, function() {

  console.log("Server listening at : http://localhost:8080/");

});

function getStaticFileContent(response, filePath, contentType) {

  fs.readFile(filePath, function(error, data) {

    if(error) {

      response.writeHead(500,{'Content-Type':'text/plain'});

      response.end('500 - Internal Server Error');

    }

    else if(data) {

      response.writeHead(200, {'Content-Type' : contentType});

      response.end(data);

    }

  });

}
