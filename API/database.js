const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_CONNECTION = 'mongodb+srv://' + process.env.MONGODB_USER_ID + ':' + process.env.MONGODB_USER_PASSWORD + '@leex.qalg9vr.mongodb.net/';
console.log(DATABASE_CONNECTION)
const clientOptions = {
  useNewUrlParser   : true,
  dbName            : 'jjk'
};

initClientDbConnection = async () => {
  try {
      await mongoose.connect(DATABASE_CONNECTION, clientOptions)
      console.log('Connected');
  } catch (error) {
      console.log(error);
      throw error;
  }
}

module.exports = {
  initClientDbConnection: initClientDbConnection
}