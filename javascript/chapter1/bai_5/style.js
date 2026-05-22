// #9. Toán tử trong JavaScript
// 1. Toán tử số học (Arithmetic Operators)
// Toán tử | Ý nghĩa    | Ví dụ           | Kết quả
//   +     | Cộng        | 5 + 2          | 7
//   -     | Trừ         | 5 - 2          | 3
//   *     | Nhân        | 5 * 2          | 10
//   /     | Chia        | 10 / 2         | 5
//   %     | Chia lấy dư | 5 % 2          | 1
//  **     | Lũy thừa    | 2 ** 3         | 8
//  ++     | Tăng 1      | let a=10; a++  | 11
//  --     | Giảm 1       | let a=10; a--  | 9

// 2. Toán tử so sánh (Comparison Operators)
// Toán tử | Ý nghĩa             | Ví dụ     | Kết quả
//    >    | Lớn hơn             | 5 > 3     | true
//    <    | Nhỏ hơn             | 2 < 1     | false
//    >=   | Lớn hơn hoặc bằng   | 5 >= 5    | true
//    <=   | Nhỏ hơn hoặc bằng   | 4 <= 3    | false
//    ==   | So sánh bằng (lỏng) | 5 == '5'  | true
//    ===  | So sánh bằng (chặt) | 5 === '5' | false
//    !=   | Khác nhau (lỏng) 5  | != '5'    | false
//    !==  | Khác nhau (chặt)    | 5 !== '5' | true

// Luôn dùng === và !== nếu muốn so sánh datatype (kiểu) và giá trị (value)

// Ngoài ra, còn có thể sử dụng:
// Toán tử logic
// let isAdult = true;
// let hasID = false;

// console.log(isAdult && hasID); // false : toán tử và (AND)
// console.log(isAdult || hasID); // true : toán tử hoặc (OR)
// console.log(!hasID); // true: toán tử khác/phủ định (NOT)

console.log("bai 5")

// 1. Toán tử số học (Arithmetic Operators)
//const a = 5;
//const b = 10, c = 15;
//console.log(a+b) //15

//const d = a * b + c;
//console.log(d) //65
//console.log(c%b) //5

// so sánh a++ và ++a. Lấy ví dụ
//let e = 5;
//const h = e++; //b = e + 1 
//const g = e++; //c = e - 1
//console.log(h) //5
//console.log(g) //6

//const k = ++e; //++ --> tang ngay lap tuc 
//console.log(k) //8

// 2. Toán tử so sánh (Comparison Operators)
const a = 5; //number
const b = "5" //string
console.log(a == b ) //so sanh long leo nen ra true 
console.log(a === b) //so sanh chat che hon nen ra false

// Toán tử logic
//xem o tren