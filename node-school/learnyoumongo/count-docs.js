const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/learnyoumongo';
const collection = 'parrots';
const testArg = process.argv[2];

function handleQuery(err, db) {
        if (err) throw err;
        const dbo = db.db().collection(collection);
        dbo.countDocuments({ age: { $gt: +testArg } }, (err, count) => {
                if (err) throw err;
                console.log(count);
                db.close();
        });
}

MongoClient.connect(url, handleQuery);
