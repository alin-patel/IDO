import ServiceProvider from 'ServiceProvider.js';
import ProductProvidor from 'ProductProvidor.js';

class Wedding {

    constructor(name, type, theme, selectedVendors, finalizedVendors, year, month, day) {
        this.name = name;
        this.type = type;
        this.theme = theme;
        this.selectedVendors = selectedVendors;
        this.finalizedVendors = finalizedVendors;
        this.date = new Date(year,month,day);

    }

    addVendor() {

    }

    deleteVendor() {

    }

    finalizeVendor() {
        
    }

    fetchWeddingInfo() { //export a class info to JSON
        let objectParse = JSON.stringify(this);
        
        const fs = require('fs');
        const path = require('path');
        fs.writeFileSync(path.resolve(__dirname, 'vendor_' + this.name + '.json'),objectParse);
    }
    
}

