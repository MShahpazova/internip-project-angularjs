///<reference path="../../typings/tsd.d.ts"/>


interface IDocument {
    name: string
    documentType: Type
    isSelected: boolean
    numberOfCopies: number


    needOriginal: boolean
    needCopy: boolean
    needLegalizedCopy: boolean
    toDelete: boolean
    countOfCopies: number,
    countOfLegalizedCopies: number
}

declare enum Type {
    original,
    copy,
    legalizedCopy
}


