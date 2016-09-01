///<reference path="../components/components.d.ts"/>
///<reference path="./document.ts"/>
var Step = (function () {
    function Step(action, documents, location, notes, feeAmount) {
        if (action === void 0) { action = null; }
        if (documents === void 0) { documents = Array(1); }
        if (location === void 0) { location = null; }
        if (notes === void 0) { notes = ""; }
        if (feeAmount === void 0) { feeAmount = 0; }
        ;
        this.action = action;
        this.documents = documents;
        this.location = location;
        this.notes = notes;
        this.feeAmount = feeAmount;
    }
    return Step;
}());
