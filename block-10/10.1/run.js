const bands = require('./bands').bands;

for (const genre in bands) {
    console.log(`${bands[genre]} plays ${genre} music.`);
}
