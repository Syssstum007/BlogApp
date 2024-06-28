import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
import dotenv from 'dotenv';
const PORT = process.env.PORT || 5000;

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog",blogRouter);
mongoose.connect( process.env.MONGODB_URI)
.then(() => app.listen(PORT))
.then(() =>
    console.log(`Connected TO Database and Listening TO Localhost ${PORT} `)
  )
  .catch((err) => console.log(err));