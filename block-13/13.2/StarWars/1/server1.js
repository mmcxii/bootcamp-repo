// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3000;

class Character {
    constructor(name, role, age, forcePoints) {
        this.name = name;
        this.role = role;
        this.age = age;
        this.forcePoints = forcePoints;
    }
}

// Data
// ===========================================================
const yoda = new Character('Yoda', 'Jedi Master', 900, 2000);

const darthMaul = new Character('Darth Maul', 'Sith Lord', 200, 1200);

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE
const obiWanKenobi = new Character('Obi Wan Kenobi', 'Jedi Master', 70, 1300);
//

// Routes
// ===========================================================
app.get('/', (req, res) => res.send('Welcome to the Star Wars Page!'));

app.get('/yoda', (req, res) => res.json(yoda));

app.get('/darthmaul', (req, res) => res.json(darthMaul));

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
app.get('/obiwankenobi', (req, res) => res.json(obiWanKenobi));
//

// Listener
// ===========================================================
app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
