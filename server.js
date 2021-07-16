const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// mongoose.connect('mongodb://localhost/workout', {
//     useNewUrlParser: true,
//     useFindAndModify: false
// })

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false 
    }
);


app.use(require('./routes/apiroutes'));
app.use(require('./routes/htmlroutes'));

app.listen((process.env.port || 8000), () => {
    console.log(`running on port ${PORT}`);
})