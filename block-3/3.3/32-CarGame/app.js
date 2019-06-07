let car = {
    make: 'Subaru',
    model: 'Forester',
    color: 'Newport Blue',
    mileage: 97000,
    isWorking: true,

    driveToWork: function() {
        alert('Old Mileage: ' + this.mileage);

        this.mileage = this.mileage + 8;

        alert('New mileage: ' + this.mileage);
    },

    driveAroundWorld: function() {
        alert('Old Mileage: ' + this.mileage);

        this.mileage = this.mileage + 24000;

        alert('New Mileage: ' + this.mileage);
        alert('Car needs a tuneup!');

        this.isWorking = false;
    },

    getTuneUp: function() {
        alert('Car is ready to go!');
        this.isWorking = true;
    },

    honk: function() {
        alert('Honk! Honk!');
    },

    reWriteStats: function() {
        console.log(car.make);
        console.log(car.model);
        console.log(car.color);
        console.log(car.mileage);
        console.log(car.isWorking);
    },
};

document.onkeyup = function(e) {
    const key = e.key;

    if (key === 'q' || key === 'w' || key === 'e' || key === 'r') {
        switch (key) {
            case 'q':
                car.driveToWork();
                break;

            case 'w':
                car.driveAroundWorld();
                break;

            case 'e':
                car.getTuneUp();
                break;

            case 'r':
                car.honk();
                break;
        }

        car.reWriteStats();
    }
};
