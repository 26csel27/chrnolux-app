const { MongoClient } = require('mongodb');

// The local connection string you used in Compass
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Name of the database you want to connect to or create
const dbName = 'myTestDatabase';

async function main() {
  try {
    await client.connect();
    console.log('🎉 Successfully connected to local MongoDB!');
    
    const db = client.db(dbName);
    // Connection works! You can add data here next.
    
  } catch (error) {
    console.error('❌ Connection failed:', error);
  } finally {
    await client.close();
  }
}

main();