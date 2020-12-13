/*en caso de  hacer uso con el directorio controlador se 
debe importar como se observa en la siguiente linea, con el nombre del archivo js
que contiene la logica */
//const controller = require('./controller/nombredelcontrollador.js');
const express = require('express');
const db = require('./models');
const morgan = require('morgan');
const app = express()
const bodyParser = require('body-parser');
const apiRouter = require('./routes');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//Primera ruta
//Siempre usa request y response
//La función se llama manejador de rutas
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
app.use('/api', apiRouter);
// .com/api/user
// .com/api/category
// .com/api/article

// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});
const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

module.exports = app;