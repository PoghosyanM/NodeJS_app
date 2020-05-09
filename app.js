const http = require("http");
const express = require("express");

const server = http.createServer();

server.listen(5000, null, null, () => {
  console.log("Server is running on port 5000");
});
