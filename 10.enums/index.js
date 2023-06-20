var days;
(function (days) {
    days["mon"] = "monday";
    days["tue"] = "Tuesday";
    // mon,tue,wes,thus,fri,sat,sun
})(days || (days = {}));
var whichDay;
whichDay = days.mon;
console.log(whichDay);
