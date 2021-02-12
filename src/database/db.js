const Database = require('sqlite-async');

function execute (db){
    db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat TEXT,
        lng TEXT,
        name TEXT,
        about TEXT,
        whatsapp TEXT,
        images TEXT,
        instructions TEXT,
        opening_hours TEXT,
        open_ on_ weekends TEXT
    );
    `)
}
   module.exports = Database.open(__dirname + '/Database.sqlite').then(execute)