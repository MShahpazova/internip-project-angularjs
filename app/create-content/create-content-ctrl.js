///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../components/components.d.ts"/>
///<reference path="../services/prerequisite-folder.ts"/>
///<reference path="./step.ts" />
///<reference path="./document.ts" />
var ctrlModule = angular.module("hydra.controllers");
//todo: create only one box for all the selected documents
//todo: number of copies to appear only when document isn't an original
//todo: should i add every property I set as a field in the class of the controller 
var CreateContentCtrl = (function () {
    // submitProcess() {
    //     this.service.submitProcess(this.name, this.addedDocuments,this.steps);
    // }
    function CreateContentCtrl($scope, service, documents) {
        // $scope.name = this.name;
        // this.name = $scope.name;
        this.service = Service;
        this.documents = [];
        this.addedDocuments = []; // target array
        this.documentsToDelete = [];
        this.steps = [];
        this.actions = [];
        // this.dataService = service;
        // var self = this;
        // console.log(this);
        // documents = service.getDocuments();
        // promises
        var self = this;
        service.getDocuments().then(function (documents) {
            self.documents = documents;
        });
        service.getActions().then(function (actions) {
            self.actions = actions;
            console.log(actions);
        });
        // vm is view-model
        $scope.vm = this;
        this.steps.push(new Step());
    }
    // attaching things to the $scope
    //check for duplicate items
    CreateContentCtrl.prototype.isPresent = function (doc) {
        //returns true if the element doesn't exist in the array
        return this.addedDocuments.map(function (doc) { return doc.name; }).indexOf(doc.name) >= 0;
    };
    CreateContentCtrl.prototype.markToDelete = function (doc) {
        doc.isSelectedForRemoval = !doc.isSelectedForRemoval;
    };
    CreateContentCtrl.prototype.removeDocumentsFromAddedDocuments = function () {
        var documentsSelectedForRemoval = this.addedDocuments.filter(function (doc) { return doc.isSelectedForRemoval; });
        this.addedDocuments = this.addedDocuments.filter(function (doc) { return !doc.isSelectedForRemoval; });
        documentsSelectedForRemoval.forEach(function (doc) { return doc.isSelectedForRemoval = false; });
    };
    CreateContentCtrl.prototype.addSelected = function () {
        var _this = this;
        // has to concat to this.selectedDocuments in the this.addedDocuments
        // our brand new documentss
        var copiedDocuments;
        var filteredDocuments = this.selectedDocuments.filter(function (doc) {
            return !_this.isPresent(doc);
        });
        this.addedDocuments = this.addedDocuments.concat(filteredDocuments);
    };
    CreateContentCtrl.prototype.removeStep = function (index) {
        if (this.steps.length > 1) {
            this.steps.splice(index, 1);
        }
    };
    CreateContentCtrl.prototype.addStep = function (index) {
        var step = new Step();
        this.steps.splice(index, 0, step);
    };
    CreateContentCtrl.prototype.addDocumentToStep = function (stepIndex) {
        this.steps[stepIndex].documents.push(new Document2());
    };
    CreateContentCtrl.$inject = ["$scope", "service"];
    return CreateContentCtrl;
}());
ctrlModule.controller("createContentCtrl", CreateContentCtrl);
