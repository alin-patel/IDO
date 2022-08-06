

import {Location} from "Location.js";

class Vendor{

    #userName= null;
    #password= null;
    #location= null;
    #vendorName= null;
    #vendorId= null;
    #phoneNumber= null;
    #businessType= null;

    constructor(userName, password, location, vendorName, vendorId, phoneNumber, businessType) {
    
        this.userName= userName;
        this.password= password;
        this.location= location;
        this.vendorName   = vendorName;
        this.vendorId     = vendorId;
        this.phoneNumber  = phoneNumber;
        this.businessType = businessType;

    }

    getVendorInfo() {
        const vendorInfo= [this.vendorName, this.businessType, this.phoneNumber, this.location];
        return vendorInfo;
    }

    updateVendorName(vendorName){ 
        this.vendorName= vendorName;
    }

    updateVendorBussinessType(businessType){ 
        this.businessType= businessType;
    }

    updateVendorLocation(location){ 
        this.location= location;
    }

    updateVendorNumber(phoneNumber){ 
        this.phoneNumber= phoneNumber;
    }

    updateVendorId(vendorId){ 
        this.vendorId= vendorId;
    }

    deleteVendor() {
        this.vendorName = null;
        this.location = null;
        this.userName = null;
        this.password = null;
        this.businessType = null;
        this.vendorId = null;
        this.phoneNumber = null;
    }
}
