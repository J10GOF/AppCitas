const { server, httpServer } = require('./src/app');
const { conn } = require('./src/db');

const port = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
    httpServer.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
});