const express = require('express');
const mysql = require('mysql');
var cors = require('cors')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Miwo2002!',
    database: 'geeky_web'
});

const app = express();

app.use(cors())
//==
var bodyParser = require('body-parser')
// var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

//==
// parse application/json
app.use(bodyParser.json());

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

app.get('/', function (req, res) {
    connection.query('SELECT * FROM tShirts', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});

app.post('/', function (req, res) {
    console.log(req.body)
    connection.query(`INSERT INTO tShirts (firstName, lastName, type, color, size) VALUES (?, ?, ?, ?, ?)`, [req.body.firstName, req.body.lastName, req.body.type, req.body.color, req.body.size], function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});

app.delete('/', function (req, res) {
    connection.query(`DELETE FROM tShirts WHERE id = ${req.body.id}`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});

app.put('/', function (req, res) {
    connection.query(`UPDATE tShirts SET firstName="${req.body.firstName}", lastName="${req.body.lastName}", type="${req.body.type}", color="${req.body.color}", size="${req.body.size}" WHERE id = ${req.body.id}`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});

app.listen(3000, () => {
    console.log('Go to http://localhost:3000/ to see posts');
});