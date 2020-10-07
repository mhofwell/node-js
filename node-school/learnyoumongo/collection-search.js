const { MongoClient } = require('mongodb');

const ageLim = parseInt(process.argv[2]);
const url = 'mongodb://localhost:27017/';

function handleQuery(err, db) {
        if (err) throw err;

        // create instance of the learnyoumongo database
        const dbo = db.db('learnyoumongo');

        // create an instance of the parrots collection
        dbo.collection('parrots')

                // query object for our search
                .find({ age: { $gt: ageLim } }, { projection: { _id: 0, name: 1, age: 1 } })

                // return the results to an Array
                .toArray((err, result) => {
                        if (err) throw err;

                        // log the results and close the db connection
                        console.log(result);
                        db.close();
                });
}

MongoClient.connect(url, handleQuery);
