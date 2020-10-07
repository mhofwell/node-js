const mongo = require('mongodb').MongoClient;

const colleciton = 'parrots';
const stAge = process.argv[2];
const port = 27017;
const base = 'mongodb://localhost:';
const db = 'learnyoumongo';

function handleRequest(err, db) {
        if (err) {
                console.error(err);
        }
        db.collection('<collection>').find({
            age > stAge; 
        });
}

mongo.connect(`${base}${port}/${db}`, handleRequest);
