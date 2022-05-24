/** URL
 * A URL string is a structured string containing multiple meaningful components. When parsed, a URL object is returned containing properties for each of these components.
 * The url module provides two APIs for working with URLs: a legacy API that is Node.js specific, and a newer API that implements the same WHATWG URL Standard used by web browsers.
 * 
 */

const url = require ('url')
 const myURL =
   url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
//    console.log(myURL);

   const myURL1 =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
//   console.log(myURL1);
  console.log(myURL.protocol); //https:
  console.log(myURL1.protocol); //https:
  console.log(myURL.pathname);  ///p/a/t/h
  console.log(myURL1.pathname); // /p/a/t/h
  console.log(myURL.search); // ?query=string
  console.log(myURL1.search); // ?query=string
  console.log(myURL.username); // undefined
  console.log(myURL1.username); // user

  const myURL2 = new URL('/foo', 'https://example.org/');
console.log(myURL2);
console.log(URL === globalThis.URL); //true

const myURL3 = new URL('https://測試');
// https://xn--g6w251d/
console.log(myURL3);
const myURL4 = new URL('https://example.org:81/foo#bar');
console.log(myURL4.hash); //#bar
myURL4.hash = 'baz';
console.log(myURL4.href); //https://example.org/foo#baz
console.log('https://nodejs.org/dist/latest-v16.x/docs/api/url.html'.host); //undefined
console.log(myURL4.host); //example.org:81
console.log(myURL4.hostname); //example.org
console.log(myURL4.origin); //https://example.org:81
const myURL5 = new URL('https://abc:xyz@example.com');
console.log(myURL5.password); //xyz
myURL5.password = 'Serine';
console.log(myURL5.href); //https://abc:Serine@example.com/
console.log(myURL5.toJSON());

const params = new URLSearchParams();
console.log(params);
params.append('foo', 'bar');
params.append('foo', 'baz');
params.append('abc', 'def');
console.log(params.toString()); //foo=bar&foo=baz&abc=def
console.log(params);