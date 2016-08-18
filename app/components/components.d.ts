///<reference path="../../typings/tsd.d.ts"/>

interface IDocument {
    name: string;
    documentType: Type;
    isSelected: boolean;
    numberOfCopies: number;
    needOriginal: boolean;
    needCopy: boolean;
    needLegalizedCopy: boolean;
    isSelectedForRemoval: boolean;
    countOfCopies: number;
    countOfLegalizedCopies: number;
}

interface IStep {
    action: StepAction,
    document: StepDocument,
    location: StepLocation,
    note: string,
    feeAmount: number
}

declare enum Type {
    original,
    copy,
    legalizedCopy
}

declare enum StepAction{
    Pay,
    Submit,
    Sign
}

declare enum StepDocument {
    Passport,
    DrivingLicense,
    ID,
    BirthCertificate
}

declare enum StepLocation {
    CityHall,
    CIC,
    PoliceStation
}