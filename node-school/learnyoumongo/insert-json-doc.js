const { MongoClient } = require('mongodb');

const fn = process.argv[2];
const ln = process.argv[3];

console.log('log');

function handleQuery(err, db) {
        if (err) throw err;
        const dbo = db.db('learnyoumongo');
        dbo.collection('docs').insert(JSON.stringify({ firstName: fn }, { lastName: ln }), (err, data) => {
                if (err) throw err;
                console.log(data);
                db.close();
        });
}

MongoClient.connect('mongodb://localhost:27017/', handleQuery);
