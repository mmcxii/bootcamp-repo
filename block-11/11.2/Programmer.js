class Programmer {
    constructor(name, position, age, favLang) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.favLang = favLang;
    }

    display() {
        for (const attr in this) {
            console.log(this[attr]);
        }
    }
}

const brian = new Programmer('Brian', 'Microsofty', 35, 'JS');

brian.display();
