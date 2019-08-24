class Actor {
    constructor(name, birthday, gender, country, url) {
        this.Name = name;
        this.Birthday = birthday;
        this.Gender = gender;
        this.Country = country;
        this.URL = url;
    }

    displayInfo() {
        for (const key in this) {
            console.log(`\n${key}: ${this[key]}`);
        }
    }
}

module.exports = Actor;
