const { MongoClient } = require('mongodb');

const fn = process.argv[2];
const ln = process.argv[3];

function handleQuery(err, db) {
        if (err) throw err;
        const dbo = db.db('learnyoumongo');
        dbo.collection('docs').insertOne({ firstName: fn, lastName: ln }, err => {
                if (err) throw err;
        });
        dbo.collection('docs')
                .find({ firstName: fn })
                .toArray((err, data) => {
                        if (err) throw err;
                        console.log(JSON.stringify(data[0]));

                        db.close();
                });
}

MongoClient.connect('mongodb://localhost:27017/', handleQuery);
