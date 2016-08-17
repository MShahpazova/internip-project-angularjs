///<reference path="../components/components.d.ts"/>
var Step = (function () {
    function Step(action, document, location, note, feeAmount) {
        if (action === void 0) { action = null; }
        if (document === void 0) { document = null; }
        if (location === void 0) { location = null; }
        if (note === void 0) { note = ""; }
        if (feeAmount === void 0) { feeAmount = 0; }
        ;
        this.action = action;
        this.document = null;
        this.location = location;
        this.note = note;
        this.feeAmount = feeAmount;
    }
    return Step;
}());
