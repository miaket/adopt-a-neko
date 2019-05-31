const express = require('express');
const app = express();

const rotas = require('../app/routes/routes');
rotas (app);
module.exports = app;