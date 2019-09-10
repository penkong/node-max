// REPL 
// read input
// evaluate input
// print
// loop and wait for return data.

const http = require('http');
const server = http.createServer((req,res) => {
  // console.log(req);
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  if(url === '/') {
    //some logic;
  }
  if(url === '/hello') {
    //some logic;
    // redirect user.
    // buffer group up chunks of code come along stream of req.
    // buffer(chunks)
    // listen to events;
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(parsedBody);
    });
    res.setHeader('Location', '/');
  }
})

// event loop and fs send to worker pool for heavy lifting
// it run in different threads.
// event loop = timers , pending cbs , poll phase search for new I/O
// then check , close cbs, maybe exit (process.exit() refs == 0);
server.listen(3000);