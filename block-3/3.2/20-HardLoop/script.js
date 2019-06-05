const myFarm = ['chickens', 'pigs', 'cows', 'horses', 'ostriches'];

myFarm.forEach((animal) => {
    console.log(animal);

    if (animal[0].toLowerCase() === 'c') {
        alert(`${animal} starts with C!`);
    } else if (animal[0].toLowerCase() === 'o') {
        alert(`${animal} starts with O!`);
    }
});
