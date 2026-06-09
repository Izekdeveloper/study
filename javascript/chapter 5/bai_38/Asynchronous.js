/*
#46. Xử Lý Bất Đồng Bộ (Asynchronous) là gì ?
1.Đồng Bộ (Synchronous) là gì?
Trong mô hình đồng bộ, các đoạn mã sẽ thực hiện tuần tự.
Mỗi dòng lệnh phải hoàn thành xong trước khi dòng tiếp theo được chạy.
Ví dụ:
console.log("1");
console.log("2");
console.log("3");
2.Bất Đồng Bộ (Asynchronous) là gì?
Trong mô hình bất đồng bộ, một số tác vụ có thể chạy nền (non-blocking), cho phép
chương trình tiếp tục thực hiện các đoạn mã khác mà không phải chờ đợi hoàn tất.
Đặc biệt quan trọng trong các thao tác như:
- Chờ API phản hồi
- Đọc/ghi file
- Lấy dữ liệu từ server
- Chờ sự kiện người dùng
Ví dụ:
console.log("1");
setTimeout(() => {
console.log("2");
}, 1000);
console.log("3");
*/
console.log("bai 38")

//xu li dong bo (tu tren xuong duoi)
console.log("bai 1")
console.log("bai 2")
console.log("bai 3")

//bat dong bo
console.log("1")
setTimeout(() => { 
    console.log("2")
    //👇 thoi gian tinh bang mili giay (2000 mili giay(2*1000) ung voi 2 giay)
}, 2000);

console.log("3")