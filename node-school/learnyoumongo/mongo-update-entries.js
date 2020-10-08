const { MongoClient } = require('mongodb');

function handleQuery(err, db) {
        if (err) throw err;
        db.db()
                .collection('users')
                .update(
                        { username: 'tinatime' },
                        {
                                $set: {
                                        age: 40,
                                },
                        },
                        (err, res) => {
                                if (err) throw err;
                                console.log(JSON.stringify(res));
                                db.close();
                        }
                );
}

MongoClient.connect(`mongodb://localhost:27017/${process.argv[2]}`, handleQuery);
