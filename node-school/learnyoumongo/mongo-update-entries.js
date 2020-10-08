const { MongoClient } = require('mongodb');

// function to handle the db query

function handleQuery(err, db) {
        if (err) throw err;
        db.db()
                .collection('users')
                .update(
                        // search by unique id
                        { username: 'tinatime' },
                        {
                                // change the age to 40
                                $set: {
                                        age: 40,
                                },
                        },
                        // handle the error and log the response object to the console.
                        (err, res) => {
                                if (err) throw err;
                                console.log(res.toString());
                                db.close();
                        }
                );
}

// connect the MongoDB

MongoClient.connect(`mongodb://localhost:27017/${process.argv[2]}`, handleQuery);
