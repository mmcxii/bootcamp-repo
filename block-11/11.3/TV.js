const axios = require('axios');
const fs = require('fs');

const TvShow = require('./TvShow');
const Actor = require('./Actor');

class TV {
    findShow(show) {
        console.log('Searching for a show...');

        const api = `http://api.tvmaze.com/singlesearch/shows?q=${show}`;

        axios.get(api).then((res) => {
            const Title = res.data.name;
            const Genre = res.data.genres.join(', ');
            const Network = res.data.network.name;
            const Rating = res.data.rating.average;
            const Plot = res.data.summary;

            const show = new TvShow(Title, Genre, Network, Rating, Plot);

            show.displayInfo();

            for (const key in show) {
                this.logData(`${key}: ${show[key]}\n`);
            }

            this.logData('-----\n');
        });
    }

    findActor(actor) {
        console.log('Searching for an actor...');

        const api = `http://api.tvmaze.com/search/people?q=${actor}`;

        axios.get(api).then((res) => {
            const data = res.data[0].person;

            const name = data.name;
            const birthday = data.birthday;
            const gender = data.gender;
            const country = data.country.name;
            const url = data.url;

            const actor = new Actor(name, birthday, gender, country, url);

            actor.displayInfo();

            for (const key in actor) {
                this.logData(`${key}: ${actor[key]}\n`);
            }
            this.logData('-----\n');
        });
    }

    logData(data) {
        fs.appendFileSync('log.txt', data, (err) => {
            if (err) return console.log(err);
        });
    }
}

module.exports = TV;
