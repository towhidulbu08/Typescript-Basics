"use strict";
//enum=> store constants, no duplicate values are allowed
//enum=> fixed set of values
//enum types=> numeric enum, string enum, heterogenous enum(mixed)
//numeric enum:
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 0] = "ReadData";
    RequestType[RequestType["saveData"] = 5] = "saveData";
    RequestType[RequestType["deleteData"] = 6] = "deleteData";
})(RequestType || (RequestType = {}));
//console.log(RequestType);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read Data";
    RequestType2["deleteData"] = "Delete Data";
    RequestType2["saveData"] = "Save Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2["deleteData"]);
//Mixed enum:Heterogenous
var requestType3;
(function (requestType3) {
    requestType3[requestType3["readData"] = 1] = "readData";
    requestType3["deleteData"] = "Delete Data";
    requestType3[requestType3["id"] = 101] = "id";
})(requestType3 || (requestType3 = {}));
console.log(requestType3);
