const express = require('express');

const app = express();

app.listen(3608);
app.use(express.static('public'));


