/*
#25. Truy cập, chỉnh sửa, thêm và xóa phần tử của mảng
1.Truy cập phần tử trong mảng
Để truy cập một phần tử, bạn sử dụng cú pháp: array[index]

Lưu ý: Chỉ số (index) bắt đầu từ 0

Ví dụ:
let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red" (phần tử đầu tiên)
console.log(colors[1]); // "green"
console.log(colors[2]); // "blue"
Nếu truy cập phần tử không tồn tại → kết quả là undefined
2.Chỉnh sửa phần tử trong mảng
Ví dụ:
let fruits = ["apple", "banana", "orange"];
fruits[1] = "grape"; // Thay "banana" bằng "grape"
console.log(fruits); // ["apple", "grape", "orange"]

3. Thêm, xóa
Thêm phần tử:
vào cuối mảng với push()
vào đầu mảng với unshift()
Xóa phần tử:
cuối mảng với pop()
đầu mảng với shift()
*/
console.log("bai 19")
//               0      1     2
const names = ["fuck","bla","ble"]

//index = 0 ; arr[index]
console.log("0 = ",names[0]) //fuck
console.log("1 = ",names[1]) //bla
console.log("10 = ",names[10]) //undefind (chua dinh nghia)

//sua phan tu trong array
names[2] = "update mame";
console.log("before:",names)

//them,xoa phan tu trong array (pop,shift)
//them phan tu vao cuoi
names.push(true,123)
//them phan tu vao dau dong
names.unshift(123,"fuckkkk")

//xoa phan tu cuoi
names.pop()
//xoa phan tu dau
names.shift()
console.log("after:" ,names)