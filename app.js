"use strict";
var a = 19;
let b = 67;
let c = [1, "ghv"];
// enums 
var roles;
(function (roles) {
    roles["admin"] = "admin";
    roles["member"] = "member";
    roles["manager"] = "manager";
})(roles || (roles = {}));
// defining type ,  no type defined gives "any" type
let d;
// d = "sj" error 
// type interference 
let e = 90;
// type annotation
let f;
f = 23;
f = "karan";
if (typeof f == 'string')
    JSON.parse(f);
function getUserData(obj) {
    // write some code 
}
getUserData({ name: "karan", email: "ksrw@gmail.com", age: 23, gender: "M" });
function getAdminData(obj) {
    // obj will have combined data of interfaces
}
let aType;
aType = "efb";
function fetchdata(a) {
    // a ke paad teeno cheeze padi hai
}
