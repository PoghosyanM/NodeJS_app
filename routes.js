const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(`
    <html >
      <head>
        <title>My node.js page</title>
      </head>
      <body>
        <form action="/message" method="POST">
          <input type="text" name="message">
          <button type="submit">Send</button>
        </form>
      </body>
    </html>
    `);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const bodyParser = Buffer.concat(body).toString();
      const message = bodyParser.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
  <html >
    <head>
      <title>My node.js page</title>
    </head>
    <body>
      <h1>My Page</h1>
    </body>
  </html>
  `);
  res.end();
};

exports.handler = requestHandler;
