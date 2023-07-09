const { MongoClient } = require("mongodb");
import './App.css';

function App() {
    return (
        <h1>Hello World!<br /></h1>
    );
}

export default App;

/*
// Replace the following with your Atlas connection string
const url = "mongodb+srv://test_user_1:OSUqUrmcCosshPAf@cluster0.pkouqkz.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);

// The database to use
const dbName = "test_db";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        // Use the collection "people"
        //const col = db.collection("people");
        // Construct a document
        //let personDocument = {
        //    "name": { "first": "Alan", "last": "Turing" },
        //    "birth": new Date(1912, 5, 23), // May 23, 1912
        //    "death": new Date(1954, 5, 7),  // May 7, 1954
        //    "contribs": [ "Turing machine", "Turing test", "Turingery" ],
        //    "views": 1250000
        //}
        // Insert a single document, wait for promise so we can read it back
        // const p = await col.insertOne(personDocument);
        // Find one document
        //const myDoc = await col.findOne();
        const col = db.collection("users");
        const myDoc = await col.find().toArray();
        // Print to the console
        console.log(myDoc);
    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}
run().catch(console.dir);
 */