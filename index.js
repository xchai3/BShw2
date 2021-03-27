
const express=require('express');
const app=express();
const port=5000;
var bodyParser=require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, OPTIONS");
    next();
});
// parse application/json
app.use(bodyParser.json())

let sendEvil = (req, res) => {
    res.sendFile('evil.html', { root: __dirname })
}

app.get('/', sendEvil);

app.put('/',(req,res)=>{
    console.log('received put');
 console.log(req.query);
})

app.listen(port, () => {
    console.log(`evil.local server listening on port ${port}!`)
})
