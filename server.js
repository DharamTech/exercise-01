const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://mongodbuser01:mongoDB1234@cluster0-shard-00-00.emngu.mongodb.net:27017,cluster0-shard-00-01.emngu.mongodb.net:27017,cluster0-shard-00-02.emngu.mongodb.net:27017/mongodbuser01?ssl=true&replicaSet=atlas-qj00jh-shard-0&authSource=admin&retryWrites=true&w=majority";
console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
    const connection = mongoose.connection;
    connection.once('open', () => {
    console.log("mongoDB database connection established successfully");
})

    const exercisesRouter = require('./routes/exercises');
    const usersRouter = require('./routes/users');

    app.use('/exercises', exercisesRouter);
    app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
});
