const { MongoClient } = require('mongodb');

const id = process.argv[4];
const url = `mongodb://localhost:27017/${process.argv[2]}`;

function handleQuery(err, db) {
        if (err) throw err;

        // create instance of the learnyoumongo database
        db.db()
                .collection('keys')

                // query object for our search
                .remove({ _id: id }, true);
        db.close();
}

MongoClient.connect(url, handleQuery);
