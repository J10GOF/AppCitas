require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const pg = require("pg");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
    host: "localhost", // Este es el host de tu base de datos
    dialect: "postgres",
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos  la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models estan todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Amistad, Chat, Comment, Like, Mesa, Post, User } = sequelize.models;

// Aca vendrian las relaciones
// Relacion muchos a muchos entre User y Amistad
User.belongsToMany(User, {
  as: "amigos",
  through: "Amistad",
  foreignKey: "senderId",
});

// Relaciones para el modelo Post
Post.belongsTo(User, { foreignKey: "userSub" });
Post.hasMany(Comment);
Post.hasMany(Like);

// Relaciones para el modelo Comment
Comment.belongsTo(User);
Comment.belongsTo(Post);

// Relaciones para el modelo de Like
Like.belongsTo(User);
Like.belongsTo(Post);

// Relaciones para el Chat
User.hasMany(Chat, { as: "sentMessages", foreignKey: "senderId" });
User.hasMany(Chat, { as: "receivedMessages", foreignKey: "receiverId" });

Chat.belongsTo(User, { as: "sender", foreignKey: "senderId" });
Chat.belongsTo(User, { as: "receiver", foreignKey: "receiverId" });

// Relacion para la Mesa
Mesa.belongsTo(User, { as: "user1", foreignKey: "user1Id" });
Mesa.belongsTo(User, { as: "user2", foreignKey: "user2Id" });

Mesa.hasMany(Chat, { foreignKey: "chatId" });
Chat.belongsTo(Chat, { foreignKey: "chatId" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
