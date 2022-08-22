console.log('bhj');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const mas = [...Array(10)].map(_ => rand(100, 999));

console.log(mas)

const cats = [

    { name: 'Pilkis', weight: 4 },

    { name: 'Murka', weight: 7 },

    { name: 'Keris', weight: 3 }

];
const newCats = cats.map(c => ({ ...c, weight: c.weight + 1 }));

const randomWeightCats = cats.map(c => ({ ...c, weight: rand(3, 10) }));

console.log(newCats);
console.log(randomWeightCats);


const catPills = cats.map(c => ({ ...c, takesPill: rand(0, 1) ? 'yes' : 'no' }));
console.log(catPills)