///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
///<reference path="../services/prerequisite-folder.ts"/>
///<reference path="./step.ts" />
///<reference path="./document.ts" />

var ctrlModule = angular.module("hydra.controllers");

//todo: create only one box for all the selected documents
//todo: number of copies to appear only when document isn't an original
//todo: should i add every property I set as a field in the class of the controller 
class CreateContentCtrl {
    service = Service;
    documents = [];

    selectedDocuments: Array<IDocument>; // temporary array
    addedDocuments: Array<IDocument> = []; // target array
    documentsToDelete: Array<IDocument> = [];
    name: string;
    steps: Array<IStep> = [];
    actions = [];
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
        if (this.steps.length > 1) {
            
        }
        this.steps.splice(index, 1);
    }


    addStep(index) {
        let step = new Step();
        this.steps.splice(index, 0, step);
    }
    
    addDocumentToStep(stepIndex) {
        this.steps[stepIndex].documents.push(new Document2());
    }

    submitProcess() {
        this.service.submitProcess(this.name, this.addedDocuments,this.steps);
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
        service.getActions().then(function(actions) {
            self.actions = actions;
            console.log(actions);
        })
        // vm is view-model
        $scope.vm = this;
        this.steps.push(new Step());
    }
}
ctrlModule.controller("createContentCtrl", CreateContentCtrl)

