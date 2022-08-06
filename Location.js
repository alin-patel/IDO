
class Location {

    #province = null;
    #city = null;
    #unitNumber = null;
    #streetAddress = null;
    #zipCode = null;
    
    constructor(province, city, unitNumber, streetAddress, zipCode) {
        this.province = province;
        this.city = city;
        this.unitNumber = unitNumber;
        this.streetAddress = streetAddress;
        this.zipCode = zipCode;
    }

    getLocation(){
        return this.province + "," + this.city + "," + this.unitNumber + this.streetAddress + "," + this.zipCode;
    }


    changeProvince(province){
        this.province = province;
    }

    changeCity(city){
        this.city = city;
    }

    changeUnitNumber(unitNumber){
        this.unitNumber = unitNumber;
    }

    changeStreetAddress(address){
        this.streetAddress = address; 
    }

    changeZipCode(zipcode){
        this.zipCode = zipcode; 
    }
}



