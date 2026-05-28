/*
#30. Truy cập và cập nhật thuộc tính của Object
1.Truy cập thuộc tính trong Object
Cách 1: Dùng dấu chấm (.)
let user = {
name: "hoidanit",
age: 25
};
console.log(user.name); // "hoidanit"
console.log(user.age); // 25
Cách 2: Dùng dấu ngoặc vuông ([ ])
console.log(user["name"]); // "hoidanit"

2.Cập nhật và thêm thuộc tính
user.age = 30; // Cập nhật
user["city"] = "Hanoi"; // Thêm mới

delete user.age; //xóa thuộc tính
*/
console.log("bai 24")

const person = {
    name1: "thong",
    age: 25,
}
console.log("person before = ",person) //person before =  Object { name1: "thong", age: 25 }

//get data
console.log("age = " ,person.age) //nen dung cach lam nay
console.log("name = " ,person["name1"]) //cach lam thu 2

//set data
person.address = "HCM" //person after =  Object { name1: "thong", age: 25, address: "HCM"}
person["Language"] = "VietNam" //person after =  Object { name1: "thong", age: 25, address: "HCM", Language: "VietNam" }

//delete data
delete person.name1;
console.log("person after = " ,person) //person after =  Object { age: 25, address: "HCM", Language: "VietNam" } 

