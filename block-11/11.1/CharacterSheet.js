class Character {
    constructor(name, profession, gender, age, strength, hitPoints) {
        this.name = name;
        this.profession = profession;
        this.gender = gender;
        this.age = age;
        this.strength = strength;
        this.hitPoints = hitPoints;
    }

    printStats() {
        for (const attr in this) {
            console.log(`${attr}: ${this[attr]}`);
        }
    }

    isAlive() {
        if (this.hitPoints > 0) {
            return true;
        } else {
            return false;
        }
    }

    attack(target) {
        target.hitPoints -= this.strength;

        console.log(
            `${this.name} attacks ${target.name} for ${this.strength} dmg! ${target.name} is now at ${
                target.hitPoints
            } hp.`
        );
    }

    levelUp() {
        const ageInc = 1;
        const strInc = 5;
        const hpInc = 25;

        console.log(
            `${this.name} has leveled up!\nAge: ${this.age} => ${this.age + ageInc}\nStrength: ${
                this.strength
            } => ${this.strength + strInc}\nHit Points: ${this.hitPoints} => ${this.hitPoints + hpInc}`
        );

        this.age += ageInc;
        this.strength += strInc;
        this.hitPoints += hpInc;
    }
}

function battle(char1, char2) {
    let round = 1;

    do {
        console.log(`Round ${round}:`);
        char1.attack(char2);
        console.log('-----');
        char2.attack(char1);
        console.log('----------');
        round++;
    } while (char1.isAlive() && char2.isAlive());

    if (char1.hitPoints > 0) {
        console.log(`${char1.name} defeated ${char2.name} in ${round} rounds!`);

        char1.levelUp();
    } else {
        console.log(`${char2.name} defeated ${char1.name} in ${round} rounds!`);

        char2.levelUp();
    }
}

const jeremyLancaster = new Character('Jeremy Lancaster', 'Paladin', 'Male', 33, 69, 420);

const notSure = new Character('Not Sure', 'Smart Dude', 'Male', 35, 101, 999);

jeremyLancaster.printStats();
console.log('-----');
notSure.printStats();
console.log('-----');

notSure.attack(jeremyLancaster);

battle(jeremyLancaster, notSure);
