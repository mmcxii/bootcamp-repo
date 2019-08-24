class Animal {
    constructor(raining, noise) {
        this.raining = raining;
        this.noise = noise;
    }

    makeNoise() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}

function massHysteria(one, two) {
    if (one.raining && two.raining) {
        console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
    }
}

const dogs = new Animal(true, 'woof');
const cats = new Animal(false, 'meow');

if (!cats.raining) {
    cats.raining = true;
}

dogs.makeNoise();
cats.makeNoise();
massHysteria(dogs, cats);
