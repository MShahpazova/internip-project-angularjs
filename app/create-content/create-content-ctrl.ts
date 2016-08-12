///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
//todo: create only one box for all the selected documents
//todo: number of copies to appear only when document isn't an original
//todo: should i add every property I set as a field in the class of the controller 
class CreateContentCtrl {
    documents = [{
        name: "Passport",
        documentType: 2,
        isSelected: true,
        numberOfCopies: 3
       }, {
            name: "National ID",
            documentType: 2,
            numberOfCopies: 1,
            isSelected: true,
        }, {
            name: "Driving licence",
            documentType: 2,
            numberOfCopies: 1,
            isSelected: true,
        }, {
            name: "Marriage licence",
            documentType: 2,
            numberOfCopies: 1,
            isSelected: true,
        }];

    selectedDocuments: Array<IDocument>; //temporary array
    addedDocuments: Array<IDocument> = []; //target array
    documentsToDelete: Array<IDocument> = [];
    name: string;

    private dataService;

    static $inject = ["$scope", "service"];

    // attaching things to the $scope
    //check for duplicate items

    isPresent(doc){
        //returns true if the element doesn't exist in the array
        return this.addedDocuments.map(doc => doc.name).indexOf(doc.name) >= 0;
    }

    // isToDelete(doc) {
    //     console.log("exp evalueted");
    //     return this.documentsToDelete.map(doc=> doc.name).indexOf(doc.name) >= 0;
    // }
    isToDelete(doc) {
        doc.isToDelete = !doc.isToDelete;
    }

    setBeforeDeleting(doc) {
        this.isToDelete(doc)
    console.log("select to delete")
    this.documentsToDelete.push(doc);
    }

    addSelected() {
        // has to concat to this.selectedDocuments in the this.addedDocuments
        // our brand new documents
            let copiedDocuments;
            console.log(this.addedDocuments.length)
        let filteredDocuments = this.selectedDocuments.filter(doc => {
            return !this.isPresent(doc);
        })
        this.addedDocuments = this.addedDocuments.concat(filteredDocuments);
        
        // if (this.addedDocuments.length > 0) {
            // copiedDocuments = angular.copy(this.addedDocuments); 
            // let filteredDocuments = [];
            // for (var index = 0; index < this.selectedDocuments.length; index++) {
            //     if (this.isPresent(this.selectedDocuments[index])) {
            //         filteredDocuments.push(this.selectedDocuments[index])
            //     }
            // }
        //     let filteredDocuments = this.selectedDocuments.filter(doc => {
        //         return !this.isPresent(doc);
        //     })
        //     this.addedDocuments =  this.addedDocuments.concat(filteredDocuments);
        // }                                 
        // else {
        //     copiedDocuments = angular.copy(this.selectedDocuments);
        //     this.addedDocuments = this.addedDocuments.concat(copiedDocuments);
        // }
    }
//

    //   checkForDuplicateDocuments = function() {
    //     //check if there are any items added
        
    //     if (this.addedDocuments.length > 0) {
    //         //then loop through items
    //         for (var i = 0; i < this.addedDocuments.length; i++) {
    //             var documentName = this.addedDocuments[i].name;
    //             for (var j = 0; j < this.selectedDocuments.length; j++) {
    //                 var documentToBeAdded = this.selectedDocuments[j];
    //                 if (documentName === documentToBeAdded.name) {
    //                     return false;
    //                 }
    //             }
    //         }
    //         return true;
    //     }
    //      return true;
    // }
    deleteDocuments() {
        this.documentsToDelete.forEach(doc => this.removeDocument(doc));
        console.log("Hello")
    }

    removeDocument(document) {
        let index = this.addedDocuments.indexOf(document);
        this.addedDocuments.splice(index, 1);
    }

    constructor($scope, service, documents) {
        
        // $scope.name = this.name;
        // this.name = $scope.name;

        // this.dataService = service;
        // var self = this;
        // console.log(this);
        // documents = service.getDocuments();
        // promises
        // this.dataService.getDocuments().then(function (documents) {
        //     console.log(this);
        //     self.documents = documents;
        // });
        // vm is view-model
        $scope.vm = this;
    }
}
ctrlModule.controller("createContentCtrl", CreateContentCtrl)
