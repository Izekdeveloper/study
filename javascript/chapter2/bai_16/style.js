/*
#21. Phạm vi biến (Scope)
1. Scope là gì?
Scope là phạm vi truy cập của biến – tức là nơi biến đó có thể được sử dụng.
Trong JavaScript, có 3 loại phạm vi chính:
- Phạm vi toàn cục (Global Scope)
- Phạm vi hàm (Function Scope)
- Phạm vi khối (Block Scope)

2.Phạm vi toàn cục – Global Scope
Biến được khai báo ngoài mọi hàm hoặc khối lệnh. Có thể truy cập từ bất kỳ đâu trong
chương trình.
Ví dụ:
let globalVar = "Tôi là biến toàn cục";
function show() {
console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); // Truy cập được

3.Phạm vi hàm – Function Scope
Biến khai báo bên trong một hàm chỉ dùng được bên trong hàm đó.
Ví dụ:
function sayHi() {
let name = "hoidanit";
console.log("Hi " + name);
}

sayHi();
console.log(name); // ❌ Lỗi: name is not defined


4. Phạm vi khối – Block Scope (ES6 trở lên)
Biến khai báo bằng let và const trong cặp dấu {} chỉ dùng được bên trong khối đó.

Ví dụ:
if (true) {
let x = 10;
const y = 20;
console.log(x, y); // ✅ Truy cập được
}

console.log(x); // ❌ Lỗi: x is not defined
*/
console.log("bai 16")

//blobal scope
let globalVar = "Tôi là biến toàn cục";
function show() {//👇 bien var ( hien tai ko dung var nua)
    console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); // Truy cập được

//function scope
function sayHi() {
    let name = "hoidanit";
    console.log("Hi " + name);
//block scope
    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y); // ✅ Truy cập được
}
console.log(x); // ❌ Lỗi: x is not defined
} //bi gioi han boi dau dong ngoac

sayHi();
console.log(name); // ❌ Lỗi: name is not defined