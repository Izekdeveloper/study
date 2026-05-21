/*
#11. Template String (Extra)
Tài liệu:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

1. Template String là gì?
Template String (còn gọi là Template Literals) là cách khai báo chuỗi bằng dấu backtick
(`) thay vì nháy đơn ' ' hay nháy kép " ".

Chúng hỗ trợ:

- Chèn biến trực tiếp bằng ${ }

- Xuống dòng không cần \n

- Chèn biểu thức JS vào trong chuỗi

Cách code cũ:
let name = "hoidanit";
let age = 20;
console.log("Tên: " + name + ", Tuổi: " + age);

Sử dụng template string:
console.log(`Tên: ${name}, Tuổi: ${age}`);
*/
console.log("bai 7")
const name = "fuck";
const age =25;
const introduction = "my name is " + name + ",im " + age + " year old";
console.log(introduction)

const intro = `my name is ${name} and I'm ${age}`; //${} (phai dung backtick (`) ) la noi vs js la minh dang dung moi bien so function
console.log(intro) //neu muon noi,thao tac chuoi thi nen dung dau backtick va ${}