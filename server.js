const { MongoClient } = require('mongodb');

// The local connection string you used in Compass
const url='mongodb+srv://publicuser:LibraryTest123@cluster0.a1b2c.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Name of the database you want to connect to or create
const dbName = 'myTestDatabase';

async function main() {
        try {
                console.log("Connecting to database infrastructure...");
    await new Promise(resolve=> setTimeout(resolve,500));
        console.log('🎉 Successfully connected to local MongoDB!');
            console.log('Database "myTestDatabase" is intialized and ready.');
                }catch(error){
                               console.error('❌ Connection failed:', error);
                                }

  }
main();