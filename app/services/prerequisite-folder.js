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
    Service.$inject = ["$http"];
    return Service;
}());
serviceModule.service("service", Service);
