const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);

server.listen(5000, null, null, () => {
  console.log("Server is running on port 5000");
});
