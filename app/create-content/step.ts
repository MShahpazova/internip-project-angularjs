///<reference path="../components/components.d.ts"/>
///<reference path="./document.ts"/>

class Step implements IStep {
    action: string;
    documents: Array<Document2>;
    location: string;
    notes: string;  
    feeAmount: number;
    constructor(action = null, documents = Array<Document2>(1), 
    location = null, notes = "", feeAmount = 0) {
;
        this.action = action;
        this.documents = documents;
        this.location = location;
        this.notes = notes;
        this.feeAmount = feeAmount;
    }
}
