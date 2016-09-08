///<reference path="../../typings/tsd.d.ts"/>
var serviceModule = angular.module("hydra.services");
var Service = (function () {
    function Service($http) {
        this.$http = $http;
    }
    Service.prototype.getDocuments = function () {
        return this.$http.get("app/documents.json").then(function (response) {
            return response.data;
        });
    };
    Service.prototype.getActions = function () {
        return this.$http.get("app/actions.json")
            .then(function (response) {
            return response.data;
        });
    };
    Service.prototype.getCategories = function () {
        return this.$http.get("http://ec2-54-229-129-126.eu-west-1.compute.amazonaws.com:8080/actions")
            .then(function (response) {
            return response.data;
        });
    };
    Service.prototype.submitProcess = function (name, prerequisites, steps) {
        var url = "";
        return this.$http.post(url, {});
    };
    Service.$inject = ["$http"];
    return Service;
}());
serviceModule.service("service", Service);
