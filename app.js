const express = require('express');
const app = express()

app.get('/', (req, res) => res.send("Hello World"));

app.listen(3000, () => {
    console.log("my rest api running on port 8000");
})
