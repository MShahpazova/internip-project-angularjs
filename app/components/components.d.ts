///<reference path="../../typings/tsd.d.ts"/>


interface IDocument {
    name: string
    documentType: Type
    isSelected: boolean
    numberOfCopies: number
}

declare enum Type {
    original,
    copy,
    legalizedCopy
}


