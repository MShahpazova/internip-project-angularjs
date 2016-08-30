///<reference path="../../typings/tsd.d.ts"/>
class Document2 implements IDocument {
    name: string;
    // documentType: Type;
    isSelected: boolean;
    numberOfCopies: number;
    feeAmount: number;
    needOriginal: boolean;
    needCopy: boolean;
    needLegalizedCopy: boolean;
    isSelectedForRemoval: boolean;
    countOfCopies: number;
    countOfLegalizedCopies: number;

    constructor(name = null, feeAmount = 0) {
        this.name = name;
        this.feeAmount = feeAmount;
    }
}