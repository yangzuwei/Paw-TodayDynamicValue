// Extensions are implemented as JavaScript classes
var Today = function() {
    // implement the generate() method to generate code
    this.evaluate = function() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy+mm+dd;
    }
}
// set the extension identifier (must be same as the directory name)
Today.identifier = "com.luckymarmot.PawExtensions.TodayDynamicValue";
// give a display name to your Code Generator
Today.title = "Today";


// call to register function is required
registerDynamicValueClass(Today);