/*
#14. Câu lệnh điều kiện – if / else / else if
//todo: chia source code theo tên chapter

1.Khái niệm
Câu lệnh điều kiện cho phép chương trình ra quyết định. Tùy thuộc vào điều kiện đúng
hoặc sai, ta có thể thực hiện những đoạn mã khác nhau.

Cú pháp:
if (điều_kiện) {
// khối lệnh nếu điều_kiện đúng (true)
}

Hoặc:
if (điều_kiện) {
// nếu đúng
} else {
// nếu sai
}
*/
console.log("bai 9")
//if/if-else / else if (khong co elif)
const age = 20;
//p* hub
if (age > 18){
    console.log("enjoy yout video")
}
else{
    console.log("you cant watch this video")
}

//score => A,b,C,D,E, GIoi, kha,trung binh
const score = 10
if(score >= 9){
    console.log("xep loai: Gioi")
}
else if(score > 6 && score <9) {
    console.log("xep loai: kha")
}
else {
    console.log("xep loai trung binh")
}