/*
#16. Vòng lặp (for, while, do...while)
Vòng lặp giúp tự động hóa việc lặp lại các khối lệnh, thay vì phải viết lặp thủ công nhiều
lần. Chỉ cần thiết lập điều kiện và hành động lặp lại là xong.

1.Vòng lặp for
Cú pháp:
for (khởi_tạo; điều_kiện; cập_nhật) {
// khối lệnh lặp
}
- khởi_tạo: Gán giá trị ban đầu cho biến đếm.
- điều_kiện: Kiểm tra trước mỗi vòng lặp. Nếu đúng thì chạy tiếp.
- cập_nhật: Tăng/giảm biến đếm.

2.Vòng lặp while
Cú pháp:
while (điều_kiện) {
// khối lệnh lặp
}
- Kiểm tra điều kiện trước mỗi vòng lặp.
- Nếu điều kiện đúng thì tiếp tục chạy, sai thì dừng.

3.Vòng lặp do...while
Cú pháp:
do {
// khối lệnh lặp
} while (điều_kiện);

Chạy ít nhất 1 lần, sau đó mới kiểm tra điều kiện.

//todo:
So sánh vòng lặp while và do...while ?
*/
console.log("bai 11")
//for
for(let i = 0;i <= 5;i++){//i thay doi gia tri sau moi lan chay nen ko dung const dc
console.log("i =",i)
}

//while
let score =  10;
while (score > 5){ //phai kiem soat vong lap while de tranh bi vong lap vo han bang lenh score-- hoac lenh khac mang tinh kiem soat
    console.log("check score",score);
    score--;
}

//do-while
let score1 = 10;
do { //do van chay cho du dieu kien dung hay sai
    console.log("check score 1" ,score1);
    score1--;
}
while(score1 > 5);//dieu kien