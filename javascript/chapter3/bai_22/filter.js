/*
#28. Lọc phần tử mảng với filter( )
Tài liệu:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/A
rray/filter
1. filter( ) là gì?
filter( ) là một phương thức của mảng, cho phép bạn lọc ra các phần tử thỏa mãn điều
kiện, và trả về một mảng mới chỉ chứa các phần tử đó.
Mảng gốc không bị thay đổi
Cú pháp:
let newArray = array.filter(function(element, index, array) {
return điều_kiện_đúng; // true giữ lại, false loại bỏ
});

element: phần tử hiện tại
index (tuỳ chọn): chỉ số phần tử
array (tuỳ chọn): mảng gốc đang được duyệt
//todo: sử dụng arrow function
*/
console.log("bai 22")
const ages = [10,20,30,25,19];
console.log("ages = ",ages) //ages =  Array(5) [ 10, 20, 30, 25, 19 ]

console.log("====================================")
//map
const agesx2 = ages.map((item,index) => { //item dat element cung duoc
    return item *2;
})
console.log("agesx2 = ",agesx2) //agesx2 =  Array(5) [ 20, 40, 60, 50, 38 ]

console.log("====================================")
//filter
const ages_18_tuoi = ages.filter((item,index) =>{
    return item > 18;
})
console.log("ages_18_tuoi = ",ages_18_tuoi) //ages_18_tuoi =  Array(4) [ 20, 30, 25, 19 ]