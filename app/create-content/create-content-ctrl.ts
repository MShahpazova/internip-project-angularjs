///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
var ctrlModule = angular.module("hydra.controllers");
//todo: validate that we don't add same documents to the selected documents
//todo: validate that number of copies is a positive number
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
            numberOfCopies: 3,
            isSelected: true,
        }];

    selectedDocuments: Array<IDocument>;
    addedDocuments: Array<IDocument> = [];
    name: string;

    private dataService;

    static $inject = ["$scope", "service"];

    // attaching things to the $scope
    //check for duplicate items
    if (condition) {
        
    }
    addSelected() {
        // has to concat to this.selectedDocuments in the this.addedDocuments
        // our brand new documents
        let copiedDocuments = angular.copy(this.selectedDocuments);

        this.addedDocuments = this.addedDocuments.concat(copiedDocuments);

          

    }


      checkForDuplicateItems = function(addedItems, newItems) {
        //check if there are any items added
        if (this.addedDocuments.length >= 1) {
            //then loop through items
            for (var i = 0; i < addedItems.length; i++) {
                var document = addedItems[i].name;
                for (var j = 0; j < newItems.length; j++) {
                    var documentToBeAdded = newItems[j];
                    if (document === documentToBeAdded) {
                        return false;
                    }
                }
            }
            return true;
        }
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
        debugger
        $scope.vm = this;
    }
}
ctrlModule.controller("createContentCtrl", CreateContentCtrl)
