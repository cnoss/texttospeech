const express = require('express');
const path = require('path');
const app = express();
app.use('/assets', express.static('assets'));

app.get('/', function (req, res){
    res.send("Hello World!");
});
app.get('/aufgabe_1', function (req, res){
    res.sendFile(path.join(__dirname + '/view/aufgabe_1.html'));
});

app.get('/aufgabe_2', function (req, res){
    res.sendFile(path.join(__dirname + '/view/aufgabe_2.html'));
});

app.get('/aufgabe_3', function (req, res){
    res.sendFile(path.join(__dirname + '/view/aufgabe_3.html'));
});

app.listen(3000, function () {
    console.log('Server started on port ', 3000);
});