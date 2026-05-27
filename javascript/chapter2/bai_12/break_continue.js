/*
#17. Câu lệnh điều khiển luồng – break, continue
Trong quá trình lặp, đôi khi bạn không muốn thực hiện toàn bộ số vòng lặp, mà chỉ
muốn:
- Thoát ra hoàn toàn khỏi vòng lặp → dùng break
- Bỏ qua vòng hiện tại và tiếp tục vòng sau → dùng continue

1.Câu lệnh break
Dùng để thoát khỏi vòng lặp ngay lập tức, kể cả khi điều kiện chưa sai.

Ví dụ:
for (let i = 1; i <= 10; i++) {
if (i === 5) break;
console.log(i);
}

2.Câu lệnh continue
Dùng để bỏ qua vòng lặp hiện tại và chuyển sang vòng tiếp theo.
Khối lệnh sau continue sẽ không được thực thi trong vòng hiện tại.

Ví dụ:
for (let i = 1; i <= 5; i++) {
if (i === 3) continue;
console.log(i);
}
*/
console.log("bai 12")
for (let i = 1;i < 10;i++){
    if(i === 5){// 5 === "5" number vs string
        //break; //break ho tro nguoi dung thoat ra khoi vong lap hoac mot cau lenh
        continue; //continue ho tro nguoi dung tiep tuc chay code khi dung dieu kien
    }                                                                                                                                      //👇 = mat so 5
    console.log("i=",i) // neu dat console.log o day thi continue no se thoat khoi vong lap ben tren va chay console tuong ung voi 1,2,3,4,thoat,6,7,8,9
}
//break giong nhu thoat khoi game luon con continue chi thoat khoi 1 level hien tai de chuyen den level khac chu khong thoat khoi game 