

class Vendor extends User {


    constructor(userName, password, personId, age, Location, vendorName, vendorId, phoneNumber, businessType, Location) {
    
        super(userName, password, personId, age); //call to constructor of parent class: User

        this.vendorName = vendorName;
        this.vendorId = vendorId;
        this.phoneNumber = phoneNumber;
        this.businessType = businessType;
        this.Location = Location;

    }

    getVendorInfo() {

    }

    updateVendorInfo() {

    }
    
    deleteVendor(vendorId) {

    }

}