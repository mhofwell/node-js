const { MongoClient } = require('mongodb');

const fn = 'randy';
const ln = 'balls';

function handleQuery(err, db) {
        if (err) throw err;
        const dbo = db.db('learnyoumongo');
        dbo.collection('docs').insertOne({ firstName: fn, lastName: ln }, (err, data) => {
                if (err) throw err;
                console.log(JSON.stringify(data));
                db.close();
        });
}

MongoClient.connect('mongodb://localhost:27017/', handleQuery);
