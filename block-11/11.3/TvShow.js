class TvShow {
    constructor(title, genre, network, rating, plot) {
        this.Title = title;
        this.Genre = genre;
        this.Network = network;
        this.Rating = rating;
        this.Plot = plot;
    }

    displayInfo() {
        for (const key in this) {
            console.log(`\n${key}: ${this[key]}`);
        }
    }
}

module.exports = TvShow;
