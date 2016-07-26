///<reference path="../../typings/tsd.d.ts"/>
var serviceModule = angular.module("hydra.services");
var DataAccessService = (function () {
    function DataAccessService($http, $q) {
        //private eventsUri: string = "http://139.59.151.78:8080/api/users";
        this.eventsUri = "";
        this.httpService = $http;
        this.qService = $q;
    }
    DataAccessService.prototype.getAllUsers = function () {
        var _this = this;
        var result = this.httpService.get(this.eventsUri, {})
            .then(function (response) { return response.data; }, function (e) { return _this.qService.reject(e); });
        return result;
    };
    DataAccessService.$inject = ["$http", "$q"];
    return DataAccessService;
}());
serviceModule.service("dataAccessService", DataAccessService);
