///<reference path="../components/components.d.ts"/>
class Step implements IStep {
    action: StepAction;
    document: StepDocument;
    location: StepLocation;
    note: string;  
    feeAmount: number;
    constructor(action = null, document = null, 
    location = null, note = "", feeAmount = 0) {
;
        this.action = action;
        this.document = null;
        this.location = location;
        this.note = note;
        this.feeAmount = feeAmount;
    }
}
