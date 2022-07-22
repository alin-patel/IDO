import Wedding from 'Wedding.js';

let wedding_data = JSON.parse(data);
const wedding = new Wedding(wedding_data[0].name, wedding_data[0].type, wedding_data[0].theme, wedding_data[0].selectedVendors, wedding_data[0].finalizedVendors, wedding_data[0].date)
