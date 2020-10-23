const MongoClient = require('mongodb').MongoClient
const url = process.env.MONGO_URL 
const client = new MongoClient(url, {useUnifiedTopology: true}) 
const db = () => {
     return client.db(process.env.MONGO_DB) 
}



 module.exports.createOne = async function createOne(object) { 

     await client.connect()

     const inserted =  db().collection('User').insertOne(object) 
        
     if (inserted.insertedCount === 1 ) { 
         console.log('Mongodb insertion successfull')
     }
     
} 



 module.exports.updateOne  = async function updateOne(object) { 

      await client.connect()
      
      const inserted = db.collection('User').updateOne(object)
      if(insertedCount === 1 ) { 
           console.log( 'updated ')
      }

}

 module.exports.deleteOne = async function deleteOne(object) {
      await clien.connect()

      const inserted = db.collection('User').deleteOne(object)
      if(insertedCount === 1 ) { 
           console.log('deleted')
      } 

}
