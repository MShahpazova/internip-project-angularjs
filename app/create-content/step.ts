///<reference path="../components/components.d.ts"/>
class Step implements IStep {
    action: string;
    document: Document2;
    location: string;
    notes: string;  
    feeAmount: number;
    constructor(action = null, document = null, 
    location = null, notes = "", feeAmount = 0) {
;
        this.action = action;
        this.document = document;
        this.location = location;
        this.notes = notes;
        this.feeAmount = feeAmount;
    }
}
