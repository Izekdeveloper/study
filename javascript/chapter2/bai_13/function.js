/*
#18. Hàm (Function) trong JavaScript
1.Hàm là gì?
Hàm là một khối mã có tên, thực hiện một công việc cụ thể.
Hàm giúp tái sử dụng mã code, chia chương trình thành các phần nhỏ dễ quản lý hơn.

Cú pháp:
function tenHam() {
// Khối lệnh
}
Ví dụ:
function greet() {
console.log("Xin chào!");
}

greet(); // Output: Xin chào!
//Gọi hàm bằng cách dùng tên hàm kèm dấu ngoặc ()

2.Tham số và đối số (Parameters & Arguments)
function greet(name) {
console.log("Xin chào, " + name + "!");
}

greet("hoidanit"); // Output: Xin chào, hoidanit!
- Tham số: biến khai báo trong hàm (name).
- Đối số: giá trị truyền vào khi gọi hàm ("hoidanit").

*/
console.log("bai 13")
function greeting(){
    console.log("say hi")
}

greeting();// dau () de noi vs java minh dang thuc thi function (cuc ki quan trong)

//sum a + b
function sum(a,b){ //params //javascript ko check datatype nen co th truyen number hoac string de dc 
    return a + b;
}
console.log(sum(6,9)) //15 //argument //input
console.log(sum("fuck ","Eric")) //fuck Eric
console.log(sum(5," eric")) //5 eric