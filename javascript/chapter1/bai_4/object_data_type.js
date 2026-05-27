
// #8. Kiểu dữ liệu tham chiếu (Object Data Types)

// Định nghĩa: Dữ liệu không được lưu trực tiếp trong biến, mà biến chỉ chứa một địa chỉ
// tham chiếu trong bộ nhớ.

// Tên kiểu dữ liệu | ví dụ | Ghi chú
// Object   | { name: "hoidanit" } | Dạng key-value, linh hoạt
// Array    | [1, 2, 3]            | Danh sách các phần tử
// Function | function() {}        |
// Date     | new Date()           |Xử lý thời gian, ngày tháng
// RegExp   | /abc/                | Biểu thức chính quy
// Map      | new Map()            | Dạng key-value
// Set      | new Set()            | Lưu giá trị duy nhất, không trùng lặp

// Tập trung vào 2 loại data chính: Object và Array
console.log("bai 4")

// object; key-value (doi tuong)
const person = {
    name :"duck",
    age:25,
    address:"hanoi"
}
console.log(person)

// Array
const scores = [10,7,5,9,3]
console.log(scores)