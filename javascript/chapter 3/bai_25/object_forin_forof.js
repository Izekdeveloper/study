/*
#31. Lặp Object sử dụng for...in và for...of
for...in duyệt qua thuộc tính
for...of duyệt qua giá trị

Cú pháp:
for (let key in object) {
console.log(key, object[key]);
}

for (let value of iterable) {
console.log(value);
}
*/
console.log("bai 25")
const sv1 = {
    username: "Fuck",
    score: 9.6,
}

const sv2 = {
    username: "eric",
    score: 3,
}

const sv3 = {
    username: "izek",
    score: 5,
}

const sinhvien = [sv1,sv2,sv3]
console.log("check sinh vien : " , sinhvien)

console.log("====================================")
//foreach
sinhvien.forEach((item,index) => {
    console.log("index = ",index,"name = ",item.username)
})

console.log("====================================")
//for in
const person = { //person la object
    email: "izek@gmail.com",
    age : 25,
    address: "Vietnam"
}
//key trong truong hop nay la username,age,address
for(let key in person) {
    console.log(key,person[key]);
} //recommend

console.log("====================================")
//for of
//lap qua value
for(let value of Object.values(person)) {
    console.log(value);
}
//lap qua key va value
for(let [key,value] of Object.entries(person)) {
    console.log(key,value);
}