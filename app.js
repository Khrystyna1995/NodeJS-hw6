const express = require('express');
const path = require('path');
const database = require('./database').getInstance();

const app = express();

database.setModels();

app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

app.use(express.static(path.join(process.cwd(), 'views')));

const { userRouter } = require('./routes');

// USERS
app.use('/users', userRouter);

// ERROR
app.use('*', (err, req, res) => {
    res.status(err.code).json({
        message: err.message,
        ok: false
    })
});

app.listen(5000, () => {
    console.log('App listen 5000');
});
