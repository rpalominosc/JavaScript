const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'none'; worker-src blob:;");
    next();
});


const connection = mysql.createConnection({
    host: '172.21.140.238',
    user: 'rpalominos',
    password: 'Polux9leo.',
    database: 'cua_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos MySQL:', err);
        return;
    }
    console.log('Conexión exitosa a MySQL');
});

app.use(express.json());
app.use(cors());

app.post('/api/articulos/', (req, res) => {
    const { descripcion, precio, stock } = req.body;

    const query = `INSERT INTO Articulos (descripcion, precio, stock) VALUES (?, ?, ?)`;
    connection.query(query, [descripcion, precio, stock], (err, result) => {
        if (err) {
            console.error('Error al guardar los datos en la base de datos:', err);
            res.status(500).send('Error al guardar los datos');
            return;
        }
        console.log('Datos guardados correctamente en la base de datos');
        res.status(200).json({ message: 'Datos guardados correctamente' }); 
    });
});

app.get('/api/articulos/:id', (req, res) =>{
    const query = `SELECT * FROM Articulos`;
    connection.query(query, (err, result) => {
        if(err) {
            console.error('Error al obtener los datos de la base de datos:', err);
            res.status(500).send('Error al obtener los datos');
            return;
        }
        res.status(200).json(result);
    });
});

app.put('/api/articulos/', (req, res) => {
    const articuloId = req.body.id;
    const { descripcion, precio, stock } = req.body;

    const query = `UPDATE Articulos SET descripcion = ?, precio = ?, stock = ? WHERE id = ?`;
    connection.query(query, [descripcion, precio, stock, articuloId], (err, result) => {
        if (err) {
            console.error('Error al modificar el artículo en la base de datos:', err);
            res.status(500).send('Error al modificar el artículo');
            return;
        }
        console.log('Artículo modificado correctamente en la base de datos');
        res.status(200).json({ message: 'Artículo modificado correctamente' });
    });
});

app.delete('/api/articulos/:id', (req, res) => {
    const articuloId = req.params.id;

    const query = `DELETE FROM Articulos WHERE id = ?`;
    connection.query(query, [articuloId], (err, result) => {
        if(err){
            console.error('Error al eliminar el articulo de la base de datos:', err)
            res.status(500).send('Error al eliminar el articulo');
            return;
        }
        console.log('Articulo eliminado correctamente');
        res.status(200).json({ message: 'Borrado correctamente'});
    });
});

app.listen(3000, () => {
    console.log('Servidor Node.js corriendo en el puerto 3000');
});