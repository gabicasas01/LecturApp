import express from 'express'
import indexRoutes from './routes/index.routes'
import morgan from 'morgan'
const { json } = require('express');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(json());
app.use(indexRoutes);

export default app;
