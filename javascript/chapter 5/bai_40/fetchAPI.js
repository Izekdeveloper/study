/*
Gọi API với Fetch
1. API là gì?
API (Application Programming Interface) là giao diện giúp các ứng dụng giao tiếp với
nhau. Trong web, bạn thường gọi API để lấy dữ liệu từ server – ví dụ: danh sách sản
phẩm, thông tin người dùng, bài viết,...
Ví dụ: Gọi API từ https://jsonplaceholder.typicode.com/users để lấy danh sách người
dùng giả lập.
Hiểu đơn giản: API là 1 url (được backend tạo ra), frontend sẽ gọi tới URL ấy để lấy dữ
liệu (data)

2. Fetch là gì?
fetch() là một hàm tích hợp sẵn trong JavaScript, dùng để gửi yêu cầu HTTP đến một
URL (API).
- Được giới thiệu từ ES6
- Trả về Promise
- Hỗ trợ đầy đủ các phương thức HTTP: GET, POST, PUT, DELETE,...
Cú pháp:
fetch(url)
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error("Có lỗi xảy ra:", error);
});

url: Địa chỉ API
response.json( ) : Chuyển dữ liệu từ JSON sang Object
.then( ): Xử lý kết quả
.catch( ): Bắt lỗi nếu có vấn đề
*/

console.log("bai 40")

//fetch => raw data (response) => object
const temp = fetch("http://localhost:8000/users")
                                   //data nay dat gi cung dc
temp.then(res => res.json()).then(data => console.log(data))
console.log(d)
