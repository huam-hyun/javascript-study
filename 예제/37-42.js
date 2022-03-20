const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map.set(lee, 'developer').set(kim, 'designer');

map.forEach((v, k, map) => console.log(v, k, map));