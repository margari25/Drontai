const data = [
    { id: 1, type: 'man', name: 'Lina', color: 'blue' },
    { id: 2, type: 'car', name: 'Opel', color: 'red' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
    { id: 5, type: 'man', name: 'Tomas', color: 'green' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
    { id: 8, type: 'car', name: 'MB', color: 'blue' },
    { id: 9, type: 'car', name: 'ZIL', color: 'red' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

const data2 = [

    { id: 1, list: [8, 8, 22], color: 'red' },

    { id: 2, list: [74, 5, 220, 7], color: 'blue' },

    { id: 3, list: [8, 1, 0, 0, 8, 22], color: 'red' }

];

const addNull = data2.map(e => ({ ...e, list: [...e.list, 0] }));
// console.log(addNull);

// data.forEach(d => console.log(d.name));

const toRed = data.map(e => e.color == 'red' ? { ...e, color: 'orange' } : { ...e });
// console.log(toRed);

const blackCars = data.map(e => e.id % 2 == 0 && e.type == 'car' ? { ...e, color: 'black' } : { ...e });
// console.log(blackCars);

const countName = data.map(e => e.name.length < 4 ? { ...e, name: e.name.padEnd(8, '*') } : { ...e });
// console.log(countName);

//==============================================FILTER 

const filterType = data.filter(e => e.type !== 'animal');
// console.log(filterType);

// data.filter(e => e.type =='animal').forEach(d => console.log(d.name));

const filterGreen = data.filter(e => e.type == 'animal' && e.color == 'green');
// console.log(filterGreen);

const manWithCar = data.filter(e => e.type == 'man' || e.type == 'car')
    .map(e => e.color !== 'red' ? { ...e, color: 'black' } : { ...e });
// console.log(manWithCar);

const six = data.filter(e => e.id !== 6);
// console.log(six);


// ============================================= SORTING
const d10 = [...data];

// d10.sort((a,b) => {
//     if (a.name > b.name){
//     return 1;
// }
//     if (a.name < b.name) {
//     return -1;
//     }
//     return 0;
// });

d10.sort((a, b) => b.name.localeCompare(a.name));
// console.log(d10);

const d11 = [...data];
d11.sort((a, b) => b.id - a.id);
// console.log(d11);

const d12 = [...data];
d12.sort((a, b) => b.name.length - a.name.length);

// console.log(d12);

const d13 = [...data];
d13.sort((a, b) => b.type != 'car' ? -1 : 1);

console.log(d13);

