import express from 'express'
import indexRoutes from './routes/index.routes'
import morgan from 'morgan'
import bodyParser from 'body-parser';
import cors from 'cors'

const { json } = require('express');

const app = express();

app.use(morgan('dev'));
// app.use(express.urlencoded({ extended: false}));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors())
// app.use(json());
app.use(indexRoutes);

export default app;
