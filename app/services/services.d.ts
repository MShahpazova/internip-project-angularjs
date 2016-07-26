///<reference path="../../typings/tsd.d.ts"/>

interface IDataAccessService {
        getAllUsers(): ng.IPromise<Array<any>>;
}