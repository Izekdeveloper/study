/*
#15. Câu lệnh switch / case

switch là một cấu trúc điều kiện giúp kiểm tra giá trị của một biểu thức và thực thi các
khối lệnh tương ứng với từng case (trường hợp cụ thể).

Sử dụng switch giúp mã nguồn gọn gàng hơn khi cần kiểm tra nhiều giá trị khác nhau
của cùng một biến.

Cú pháp:
switch (biểu_thức) {
case giá_trị_1:
// khối lệnh nếu biểu_thức === giá_trị_1
break;

case giá_trị_2:
// khối lệnh nếu biểu_thức === giá_trị_2
break;

...

default:
// khối lệnh nếu không khớp bất kỳ case nào
}
*/
console.log("bai 10")
//score : Gioi,kha,trung binh,yeu
const score = 8;
switch(true){ //swich chi so sanh true false voi dieu kien nen phai so sanh true === true  thi moi chay lenh ben duoi
    case (score >= 8 && score <= 10): //true === 8
        console.log("gioi"); //chi chay dong nay khi score = 8 === true
        break; //break de thoat ra khoi khoi lenh neu khong co lenh se in ra tu tren xuong duoi chu khong phai in ra 1 cai 
    case (score >= 6 && score < 8): //true === 6
        console.log("kha");
        break;
    case (score >= 4 && score < 6): //true === 4
        console.log("trung binh");
        break;
    default:
        console.log("yeu")
}
