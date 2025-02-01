//enum=> store constants, no duplicate values are allowed
//enum=> fixed set of values
//enum types=> numeric enum, string enum, heterogenous enum(mixed)

//numeric enum:

enum RequestType {
  ReadData,
  saveData = 5,
  deleteData,
}
//console.log(RequestType);

// string enum

enum RequestType2 {
  readData = "Read Data",
  deleteData = "Delete Data",
  saveData = "Save Data",
}
console.log(RequestType2["deleteData"]);

//Mixed enum:Heterogenous

enum RequestType3 {
  readData = 1,
  deleteData = "Delete Data",
  id = 101,
}

console.log(RequestType3);
