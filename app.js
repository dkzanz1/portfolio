const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('home')
})
app.get('*', (req, res) => {
    res.send (`I don,t know that path`)
})


app.listen(3000, () => {
    console.log('running on port 3000')
})