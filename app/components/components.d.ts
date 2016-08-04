///<reference path="../../typings/tsd.d.ts"/>


    interface IDocument {
        name: string
        numberOfCopies: number
        isSelected: boolean
        documentType: Type
}
    
declare enum Type {
    Identity,
    MarriageDocuments,
  
}
