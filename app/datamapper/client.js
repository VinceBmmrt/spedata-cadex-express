const { Client } = require('pg');

// les paramètres de connexion sont automatiquement récupérer
// dans les variables d'environnement suivantes :
// PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE

const client = new Client();

client.connect();

module.exports = client;
