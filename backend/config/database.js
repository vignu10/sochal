const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
MongoClient.connect('mongodb+srv://vignu:gVRwpJBTqDfACgRA@cluster0.mnh253q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(
    result =>{
        console.log('connected')
        .catch(err =>{
            console.log(err)
        });

    }
)