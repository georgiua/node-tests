var url = require('url')
var addr = 'http://localhost:8080/index.html?name=hello&surname=json'
var q = url.parse(addr,true);

console.log(q.auth);
console.log(q.hash);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.query);