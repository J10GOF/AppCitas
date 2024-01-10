const { server, httServer } = require('./src/app');
const { conn } = require('./src/db');

const port = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {
    httServer.listen(port, () => {
        console.log(`%s listening at ${port}`);
    })
})