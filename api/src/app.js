const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
const cors = require("cors");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");

require("./db");

const server = express();
const httpServer = http.createServer(server);
const io = socketIO(httpServer);

server.name = "API";

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};


server.use(cors(corsOptions));

server.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

server.use(cors(corsOptions));
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Envia el objeto 'io' a las rutas para que puedan utilizarlo
server.use((req, res, next) => {
  res.locals.io = io;
  next();
});

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
});

// Configuracion de Socket.io
io.on("connection", (socket) => {
  console.log("Un usuario se ha conectado");

  // Aca es donde se manejarar eventos de Socket.io...

  socket.on("disconnect", () => {
    console.log("Un usuario se ha desconectado");
  });
});

module.exports = { server, httpServer };
