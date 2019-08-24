var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var animals = [
    {
        animalType: 'dog',
        pet: true,
        fierceness: 4,
    },
    {
        animalType: 'cat',
        pet: true,
        fierceness: 10,
    },
    {
        animalType: 'giraffe',
        pet: false,
        fierceness: 4,
    },
    {
        animalType: 'zebra',
        pet: false,
        fierceness: 8,
    },
    {
        animalType: 'lion',
        pet: false,
        fierceness: 10,
    },
];

app.get('/dog', (req, res) => res.render('dog', animals[0]));

app.get('/all', (req, res) => res.render('index', { selected: animals }));

app.get('/all-pets', (req, res) => {
    const pets = [];

    animals.forEach((animal) => {
        if (animal.pet) pets.push(animal);
    });

    res.render('index', { selected: pets });
});

app.get('/all-non-pets', (req, res) => {
    const fugginBeasts = [];

    animals.forEach((animal) => {
        if (!animal.pet) fugginBeasts.push(animal);
    });

    res.render('index', { selected: fugginBeasts });
});

app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
