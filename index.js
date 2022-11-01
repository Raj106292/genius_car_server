const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.tkcvter.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const run = async() => {
    try{
        const userCollection = client.db('genius_car').collection('users');
        const user = {
            name: 'Web Ph',
            email: 'webpn@gmail.com',
        };
        const result = await userCollection.insertOne(user);
        console.log(result);
    }
    finally {

    }
}

run().catch(error => console.log(error.message));

app.get('/', (req, res) => {
    res.send('Genius Car Server Is Running');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});