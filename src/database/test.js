const Database = require('./db');
Database.then(function(db) {
       db.run (`
        INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_ on_ weekends
        ) VALUES (
            "-21.0021979", 
            "-47.6570341",
            "Lar das meninas",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "https://images.unsplash.com/photo-1598322313658-512b47702270?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "1"
       );
       `)
})