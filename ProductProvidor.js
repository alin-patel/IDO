
class ProductProvidor extends Vendor {

    constructor(username, password, personId, age, Location, vendorName, vendorId, phoneNumber, businessType, productName, productPrice, productSize, productDeliveryTime) {
        
        super(username, password, personId, age, Location, vendorName, vendorId, phoneNumber, businessType);

        this.productName         = productName;
        this.productPrice        = productPrice;
        this.productSize         = productSize;
        this.productDeliveryTime = productDeliveryTime;

    }

    getProduct() {

    }

    update() {

    }
}