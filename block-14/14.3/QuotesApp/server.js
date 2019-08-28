var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'nich',
    password: '123456',
    database: 'quotes_db',
});

db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM quotes';

    db.query(sql, (err, data) => {
        if (err) throw err;

        res.render('index', { quotes: data });
    });
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM quotes WHERE id = ?';

    db.query(sql, id, (err, data) => {
        if (err) throw err;

        res.render('single-quote', data[0]);
    });
});

// Create a new quote using the data posted from the front-end.
app.post('/api/quotes', (req, res) => {
    const { quote, author } = req.body;
    const sql = 'INSERT INTO quotes(quote, author) VALUES(?, ?)';

    db.query(sql, [quote, author], (err, data) => {
        if (err) throw err;

        res.redirect('/');
    });
});

// Delete a quote based off of the ID in the route URL.
app.delete('/api/quotes/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM quotes WHERE id = ?';

    db.query(sql, id, (err, data) => {
        if (err) throw err;

        res.redirect('/');
    });
});

// Update a quote.
app.put('/api/quotes/:id', (req, res) => {
    const { id } = req.params;
    const { quote, author } = req.body;
    const sql = "UPDATE quotes SET author = ?, quote = '?' WHERE id = ?";

    db.query(sql, [author, quote, id], (err, data) => {
        if (err) throw err;

        res.redirect('/');
    });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
