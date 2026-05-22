// #7. Kiểu dữ liệu nguyên thủy (Primitive Data Types)
// Mục tiêu:
// - Hiểu được các kiểu dữ liệu nguyên thủy trong JavaScript
// - Biết cách sử dụng typeof để kiểm tra kiểu dữ liệu
// Định nghĩa: Kiểu dữ liệu nguyên thủy (primitive) là những kiểu dữ liệu cơ bản, không có
// phương thức hay thuộc tính, và được lưu trực tiếp giá trị trong vùng nhớ của biến

// 7 kiểu dữ liệu nguyên thủy trong JavaScript
// Kiểu dữ liệu | Ví dụ giá trị | Ghi chú

// Number     | 10; 3.14     | Gồm cả số nguyên và số thực
// String     |hoidanit      | Chuỗi ký tự đặt trong nháy đơn hoặc nháy kép
// Boolean    |true, false   | Chỉ có 2 giá trị
// Undefined  | undefined    | Khai báo biến số, và không gán giá trị cho biến số
// Null       |null          | Khi khai báo biến, giá trị bằng null. Ám chỉ rằng, giá trị của biến số “nothing”/”empty”
// BigInt     |123456789n    |Dùng cho số rất lớn (thêm n ở cuối),tối đa 2^53 - 1
// Symbol     | Symbol("id") | Dùng để tạo giá trị duy nhất
/// Lưu ý:
// JavaScript không phân biệt số nguyên hay số thực, chỉ gọi chung là number

// Có thể kiểm tra datatype bằng cách sử dụng: typeof
// console.log(typeof 10); // "number"
// console.log(typeof "hello"); // "string"
console.log("bai 3")

//Number
const myage = 25;
const myscore = 9.1;

console.log(myage)
console.log(myscore)

//string (3 loai string)
const name = "sukablyat"
const name1 = 'suka'
const name2 = `sukabl`

console.log(name)
console.log(name1)
console.log(name2)

// bootlean : true/false
const istuideptrai = true;

console.log(istuideptrai)

// undefined (chua gan gia tri )
let bla;
console.log(bla);

//Null (da duoc gan gia tri nhung gia tri cua no bang null)
let testnull = null;
console.log(testnull)

// typeof()
// dung de ktra kieu du lieu
typeof(10) //number
typeof ("fuck") //string
// kiem tra tren cua so console tren web