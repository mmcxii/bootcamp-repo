class DigitalPal {
    constructor() {
        this.hungry = false;
        this.sleepy = false;
        this.bored = true;
        this.age = 0;
    }

    feed() {
        if (this.hungry) {
            console.log('That was yummy!');

            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full");
        }
    }

    sleep() {
        if (this.sleepy) {
            console.log('Zzzzzzz...');

            this.sleepy = false;
            this.bored = true;

            this.increaseAge();
        } else {
            console.log("I'm not tired!");
        }
    }

    play() {
        if (this.bored) {
            console.log("Yay! Let's play!");

            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Let's play later?");
        }
    }

    increaseAge() {
        this.age++;

        console.log(`Happy birthday to me! I am ${this.age} years old!`);
    }
}

const dog = new DigitalPal();
dog.outside = false;
dog.bark = () => console.log('Bork!');
dog.goOutside = function() {
    if (!this.outside) {
        this.outside = true;

        this.bark();
        console.log('Yay! I love the outdoors!');
    } else {
        console.log("But we're already outside??");
    }
};
dog.goInside = function() {
    if (this.outside) {
        this.outside = false;

        console.log('Do we have to? Fine...');
    } else {
        console.log("But we're already inside...");
    }
};

const cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = () => console.log('Mrrrrrroooooowwwwww');
cat.destroyFurniture = function() {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        this.bored = false;
        this.sleepy = true;

        console.log('MUAHAHAHAHA! TAKE THAT FURNITURE!');
    } else {
        console.log('The house has already been destroyed, what more is there to do??');
    }
};
cat.buyNewFurniture = function() {
    this.houseCondition += 50;

    console.log('Lol u sure m8?');
};

console.log('\nWhat owning a dog is like...');
dog.goOutside();
dog.play();
dog.goInside();
dog.feed();
dog.sleep();

console.log('\nWhat owning a cat is like...');
do {
    cat.meow();
    cat.destroyFurniture();
} while (cat.houseCondition > 0);
cat.destroyFurniture();
cat.buyNewFurniture();
