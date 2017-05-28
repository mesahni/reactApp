'use strict';
var appname = "React demo UI";

var express = require('express');
var serveStatic = require('serve-static');
var proxy = require('express-request-proxy');
var app = express();

function setStaticAssetsCacheControl(res, path) {
    if(res.req.headers['Cache-Control'] || res.req.header('cache-control')) {
        res.setHeader('Cache-Control', res.req.headers['Cache-Control'] || res.req.headers['cache-control']
        )
    }
}

//serve the index.html in the public folder
app.use('/', serveStatic('public', {
    setHeaders: setStaticAssetsCacheControl
}));

var port = process.env.PORT || 3000;
app.listen(port, function() {
   console.log('Server running on ' + port);
});