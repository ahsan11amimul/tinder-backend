const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Card = require('./models/cards');
const uriString = "mongodb+srv://AnikaAhsan:AnikaAhsan@cluster0.m9gfy.mongodb.net/tinder-clone?retryWrites=true&w=majority";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
mongoose.connect(uriString, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true })
app.get('/', (req, res) => {
    res.status(200).send("Hello Anika");
});
app.post('/tinder', (req, res) => {
    const dbCard = req.body;
    Card.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});
app.get('/tinder', (req, res) => {

    Card.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});
app.listen(port, () => console.log(`server running at port ${port}`));