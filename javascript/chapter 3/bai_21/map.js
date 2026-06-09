/*
#27. Biến đổi mảng với map( )
Tài liệu:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/A
rray/map
1.map( ) là gì?
Phương thức map( ) được dùng để duyệt qua từng phần tử trong mảng, tạo ra một
mảng mới mà mỗi phần tử là kết quả biến đổi của phần tử tương ứng trong mảng ban
đầu.
map() không thay đổi mảng gốc.
Cú pháp:
let newArray = array.map(function(element, index, array) {
// return giá trị mới
});
element: phần tử hiện tại
index (tuỳ chọn): chỉ số phần tử
array (tuỳ chọn): chính mảng đang được duyệt
return: chính là phần tử mới của mảng kết quả
//todo: sử dụng arrow function
*/
console.log("Bai 21")
//for each (read data)
const scores = [1,2,3,4,5,6,7,8,9];
scores.forEach((element,index) => {
    console.log("index = ",index,"value = ",element)
}) // foreach ko ho tro sua doi array (chi dung de read data)

console.log("====================================")
//map (modify data)
const scorex2 = scores.map((element,index) => {
    console.log("index = ",index,"value = ",element)
    return element * 2;
}) //map dung de sua doi tung phan tu ben trong array

console.log("scores = ",scores) //scores =  Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log("scorex2 = ",scorex2) //scorex2 =  Array(9) [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
//ko thay doi array ban dau ma no chi thay doi array thu 2 do nguoi dung tao la scorex2

console.log("====================================")
//map nhung ngan hon
const otherScorex2 = scores.map((element,index) => element * 2)
//ko khuyen khich dung cai nay vi kho hieu vcl
console.log("otherScorex2 = ",otherScorex2)