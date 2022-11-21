// import React from "react";


const calculateStampDuty = function(value, ftbBool, setStampDutyCost) {
    var sdltTotal;
    if (ftbBool === false) {
        if (value <= 250000) {
            sdltTotal = 0;
        } else if (value >= 250001 && value <= 925000) {
            sdltTotal = (value - 250000)*0.05;
        } else if (value >= 925001 && value <= 1499999) {
            sdltTotal = ((value - 925001)*0.1)+(675000*0.05);
        } else {
            sdltTotal = ((value - 1499999)*0.12)+((value - 925001)*0.1)+(675000*0.05);
        }
        return(sdltTotal);
    } else if (ftbBool !== false) {
        if (value <= 425000) {
            sdltTotal = 0;
        } else if (value >= 425001 && value <= 625000) {
            sdltTotal = (value - 425000)*0.05;
        } else if (value >= 625001 && value <= 925000) {
            sdltTotal = (value - 250000)*0.05;
        } else if (value >= 925001 && value <= 1499999) {
            sdltTotal = ((value - 925001)*0.1)+(675000*0.05);
        } else {
            sdltTotal = ((value - 1499999)*0.12)+((value - 925001)*0.1)+(675000*0.05);
        }
        return(sdltTotal);
    }
}

export default calculateStampDuty;