///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
///<reference path="./step.ts" />
///<reference path="./document.ts" />
var ctrlModule = angular.module("hydra.controllers");

//todo: create only one box for all the selected documents
//todo: number of copies to appear only when document isn't an original
//todo: should i add every property I set as a field in the class of the controller 
class CreateContentCtrl {
    documents = [];

    selectedDocuments: Array<IDocument>; // temporary array
    addedDocuments: Array<IDocument> = []; // target array
    documentsToDelete: Array<IDocument> = [];
    name: string;
    steps: Array<IStep> = [];
    private dataService;

    static $inject = ["$scope", "service"];

    // attaching things to the $scope
    //check for duplicate items

    isPresent(doc) {
        //returns true if the element doesn't exist in the array
        return this.addedDocuments.map(doc => doc.name).indexOf(doc.name) >= 0;
    }

    markToDelete(doc) {
            doc.isSelectedForRemoval = !doc.isSelectedForRemoval;
        }

    removeDocumentsFromAddedDocuments() {
        let documentsSelectedForRemoval = this.addedDocuments.filter(doc => doc.isSelectedForRemoval);
        this.addedDocuments = this.addedDocuments.filter(doc => !doc.isSelectedForRemoval);
        documentsSelectedForRemoval.forEach(doc => doc.isSelectedForRemoval = false);
    }

    addSelected() {
        // has to concat to this.selectedDocuments in the this.addedDocuments
        // our brand new documentss
        let copiedDocuments;
        let filteredDocuments = this.selectedDocuments.filter(doc => {
            return !this.isPresent(doc);
        })
        this.addedDocuments = this.addedDocuments.concat(filteredDocuments);
    }
    removeStep(index) {
        // var element = this.steps.indexOf(index);
        console.log("logger", this.steps)
        this.steps.splice(index, 1);
    }


    addStep(index) {
        let step = new Step();
        this.steps.splice(index, 0, step);
        console.log(index);
        console.log("logger", this.steps)
    }
    
    constructor($scope, service, documents) {

        // $scope.name = this.name;
        // this.name = $scope.name;

        // this.dataService = service;
        // var self = this;
        // console.log(this);
        // documents = service.getDocuments();
        // promises
        let self = this;
        service.getDocuments().then(function (documents) {
            self.documents = documents;
        });
        // vm is view-model
        $scope.vm = this;
        this.steps.push(new Step());
        console.log(this.steps[0].location)
    }
}
ctrlModule.controller("createContentCtrl", CreateContentCtrl)

