import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();
app.use(cors());

app.use('/posts',postRoutes);

app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.json({ limit: "30mb", extended: "true" }));

const CONNECTION_URL = 'mongodb+srv://raunak:Raunak123@cluster0.2hodq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Serevr running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

    mongoose.set('useFindAndModify',false);