var a =19;
let b = 67;
let c : [number,string] =[1,"ghv"];
// enums 

enum roles {
    admin = "admin",
    member = "member",
    manager = "manager"
}


// defining type ,  no type defined gives "any" type

let d : number;

// d = "sj" error 

// type interference 
let e =90

// type annotation
let f : unknown ;

f = 23;
f = "karan"

if(typeof f == 'string')
    JSON.parse(f);


// interfaces
interface User {
    name: string,
    email: string,
    age: number,
    gender ?: string // optional
}

function getUserData(obj : User){
    // write some code 
}
getUserData({name:"karan", email:"ksrw@gmail.com",age:23,gender:"M"})

// interface extension
interface ADMIN {
    role:string,
    salary: number
}

interface ADMIN {
    role: string,
    bounty: number
}

function getAdminData(obj: ADMIN){
    // obj will have combined data of interfaces
}

// type alias

type someType = number | string; // number and string union

let aType : someType

aType = "efb";

// intersection

type Employer = {
    name : string,
    age: number
}

type Admin = Employer & { getDetails(user:string): void }

function fetchdata(a : Admin){
    // a ke paad teeno cheeze padi hai
}