

class Wedding {

    #selectedVendors = [];
    #finalizedVendors = [];
    #name = null;
    #type = null;
    #theme = null;
    #date = null;

    constructor(name, type, theme, year, month, day) {
        this.#name = name;
        this.#type = type;
        this.#theme = theme;
        this.#date = new Date(year,month,day);
    }

    addVendor(Vendor v) {
        if (this.#selectedVendors.includes(v.vendorName) == false){
            this.#selectedVendors.push(v);
        }
    }

    deleteVendor(Vendor v) {
        for (var i = 0; i < selected_vendors.length; i++){
            if (this.#selected_vendors[i].vendorName == v.vendorName){
                this.#selected_vendors.splice(i, 1);
                break;
            }
        }
        return;
    
    }

    finalizeVendor(Vendor v) {
        if (this.#finalizedVendors.includes(v.vendorName) == false){
            this.#finalizedVendors.push(v);
        }
    }
    
    fetchWeddingInfo() { //export a class info to JSON
	        let objectParse = JSON.stringify(this);
	        
	        const fs = require('fs');
	        const path = require('path');
	        fs.writeFileSync(path.resolve(__dirname, 'vendor_' + this.name + '.json'),objectParse);
    }

} 

