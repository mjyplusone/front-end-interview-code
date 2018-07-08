var http = require('http');
var url = require('url');
var util = require('util');
//引入querystring模块处理query字符串
var querystring = require('querystring');

http.createServer((req, res) => {
    res.statusCode = 200;

    var urlPath = url.parse(req.url).pathname;
    var qs = querystring.parse(req.url.split('?')[1]);
    console.log(qs);
    //如果urlPath为'jsonp'，就认定该请求为携带jsonp方法的http请求
    if (urlPath === '/jsonp') {
        res.writeHead(200,{'Content-Type': 'application/json; charset=utf-8'});
        var data = {
            "name": "plusone"
        };
        data = JSON.stringify(data);
        //假设我们定义的回调函数名为callbackfunc
        var callback = qs.callback + '(' + data + ');';
        res.end(callback);
    } else {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.end('Hell World\n');    
    }   
}).listen(3000);
console.log('Server running at http://localhost:3000/');