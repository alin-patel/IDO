
export default class ServiceProvider extends Vendor {

    constructor(username, password, personId, age, Location, vendorName, vendorId, phoneNumber, businessType, serviceName, hourlyRate, timeTakenToComplete) {
        
        super(username, password, personId, age, Location, vendorName, vendorId, phoneNumber, businessType); //call to constructor of parent class: Vendor

        this.serviceName         = serviceName;
        this.hourlyRate          = hourlyRate;
        this.timeTakenToComplete = timeTakenToComplete;

    }

}