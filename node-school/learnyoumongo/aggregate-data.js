const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/learnyoumongo';
const collection = 'prices';
const criteria = process.argv[2];

function handleQuery(err, db) {
        if (err) throw err;
        const dbo = db.db().collection(collection);
        dbo.aggregate([
                { $match: { size: criteria } },
                { $group: { _id: '$size', total: { $avg: '$price' } } },
        ]).toArray((err, results) => {
                if (err) throw err;
                // const value = Number(results).toFixed(2);
                const rounded = Number(results[0].total).toFixed(2);
                console.log(rounded);
                db.close();
        });
}

MongoClient.connect(url, handleQuery);
