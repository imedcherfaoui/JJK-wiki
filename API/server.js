// Instancier express
const express = require('express');
// bodyParser permet de convertir les données en JSON
const bodyParser = require('body-parser');
// cors permet aux autres serveurs de faire des requêtes vers notre API
var cors = require('cors');
// Initialisation de express
const app = express();

// Connexion à la BDD UmaiShop
const database = require('./database');
database.initClientDbConnection();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res) {
  res.send('Welcome to Jujutsu Kaisen API!');
});

require("./routes/character.routes")(app);

app.listen(3000, function() {
  console.log("Server listening on port 3000.");
});

