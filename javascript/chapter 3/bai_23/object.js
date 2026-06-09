/*
#29. Giới thiệu về Đối tượng (Object)
1.Đối tượng là gì?
Trong JavaScript, đối tượng (object) là kiểu dữ liệu dùng để lưu trữ thông tin có cấu trúc
dưới dạng cặp tên thuộc tính (key) và giá trị (value).
Nếu mảng lưu danh sách giá trị, thì đối tượng lưu thông tin mô tả rõ từng giá trị.

Mảng (Array) Đối tượng (Object)
["hoidanit", 25] { name: "hoidanit", age: 25 }
Dùng chỉ số (index) Dùng tên thuộc tính (key)

2. Cách khai báo đối tượng
let obj_name = {
key: value
};
*/
console.log("bai 23")
const scores = [10,9,8,7,6,5,4,3,2]

//key:value
const sv1 = {
    score: 10,
    name: "Thong",
    address: {
        city:"FUCK",
        country:"fuck",
    }
}
const sv2 = {
    score: 4,
    name: "izek",
    address: {
        city:"FUCK",
        country:"fuck",
    }
}

const sinhvien = [sv1,sv2]
console.log("Scores = " ,scores)
console.log("sinh vien = ",sinhvien)