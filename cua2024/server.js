const url = 'http://localhost:5500';

const express =require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();


const connectionData = mysql.createConnection({
    host    :'172.21.140.238',
    user    :'rpalominos',
    password:'Polux9leo.',
    database:'cua_db',
    port    :33060
});

// const miSesion= getClassicSession(connectionData);
// connectionData.end();
connectionData.connect();

connectionData.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos MySQL:', err);
        return;
    }
    console.log('Conexión exitosa a MySQL');
});



connectionData.end();

