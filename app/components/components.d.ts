///<reference path="../../typings/tsd.d.ts"/>

interface IDocument {
    name: string;
    isSelected: boolean;
    numberOfCopies: number;
    feeAmount: number;
    needOriginal: boolean;
    needCopy: boolean;
    needLegalizedCopy: boolean;
    isSelectedForRemoval: boolean;
    countOfCopies: number;
    countOfLegalizedCopies: number;
}

interface IStep {
    action: string,
    document: Document2,
    location: string,
    notes: string,
    feeAmount: number
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