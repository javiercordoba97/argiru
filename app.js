const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.get('/', function(req,res){
    let homePath = path.resolve(__dirname,'./views/home.html');
    res.sendFile(homePath);
});
app.get('/carrito', function(req,res){
    let carritoPath = path.resolve(__dirname,'./views/carrito.html');
    res.sendFile(carritoPath);
});


app.listen(3000,()=>{
    console.log('servidor corriendo')
});