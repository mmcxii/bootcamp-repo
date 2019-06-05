const myFarm = ['chickens', 'pigs', 'cows', 'horses', 'ostriches'];

myFarm.forEach((animal) => {
    console.log(animal);

    if (animal[0] === 'c') {
        alert(`${animal} starts with C!`);
    } else if (animal[0] === 'o') {
        alert(`${animal} starts with O!`);
    }
});
