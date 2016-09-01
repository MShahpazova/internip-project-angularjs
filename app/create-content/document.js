///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
var Document2 = (function () {
    function Document2(name, feeAmount) {
        if (name === void 0) { name = null; }
        if (feeAmount === void 0) { feeAmount = 0; }
        this.name = name;
        this.feeAmount = feeAmount;
        console.log("logger into constructor");
    }
    return Document2;
}());
