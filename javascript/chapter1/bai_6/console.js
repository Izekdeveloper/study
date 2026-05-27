/// #10. Câu lệnh console trong JavaScript
//todo: hướng dẫn cách comment code
// Console là câu lệnh đã được khai báo sẵn trong môi trường javascript (tương tự bạn có hàm printf khi học Java/C)

//1.Các câu lệnh thường gặp
//console.log( ) – In giá trị ra màn hình console
//console.error( ) – Hiển thị lỗi
//console.warn( ) – Hiển thị cảnh báo

//phân biệt error và warning

//2.Các tip hay dùng
//Sử dụng dấu phẩy thay vì cộng chuỗi trong console.log()
//let name = "hoidanit";
//let age = 20;

// Không nên: cộng chuỗi dễ sai
//console.log("Name: " + name + ", Age: " + age);

// Nên: dùng dấu phẩy (tự động thêm dấu cách)
//console.log("Name:", name, "Age:", age);

//Tô màu cho console.log() bằng %c
//console.log("%cCảnh báo!", "color: red; font-weight: bold;");
console.log("bai 6")
const name = "eric";
const age = 25;
// thong tin tren console
console.log("info")
console.error("oops my fault") // error
console.warn("fuck")           //warning

console.log("Name: " + name + ", Age: " + age); //ko nen dung +
console.log("Name:", name , ", Age:", age);
console.log(name , age)

//to mau
console.log("%cSTOP","color:red; font-size:100px")