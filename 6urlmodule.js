var url = require('url');

//url.parse() : parses an address,
//it will return a URL object with each part of the address
//as properties

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr,true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
console.log(q.query.month); //returns an object: { year: 2017, month: 'february' }