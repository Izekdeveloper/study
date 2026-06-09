/*
Chapter 5 : Xử Lý Bất Đồng Bộ (Asynchronous)
Sử dụng Callback, Promise và async await để xử lý bất đồng bộ trong javascript

#44. Cài đặt môi trường Nodejs
Mục đích: môi trường để chạy code Javascript ở phía backend (server)
Tài liệu: https://nodejs.org/en
1.Nodejs là gì ?
Nodejs không phải là thư viện (library), không phải framework của JavaScript.
Nodejs là môi trường để bạn thực thi code javascript, tại browser và server.
Bạn học Node.js, về bản chất, là học các thư viện/framework (viết bằng JavaScript), nên
bạn cần cài đặt môi trường Nodejs để có thể thực thi code JavaScript
Điều này tương tự với:
Bạn học cách sử dụng Microsoft Excel (javascript)
Bạn cần cài hệ điều hành Windows để có thể học nó (nodejs)

2. Cài đặt Nodejs
Sai lầm của beginners, là không quan tới tới version của phần mềm. Nên nhớ, công nghệ
nó thay đổi theo thời gian, vì vậy, để hạn chế tối đa lỗi tối đa, bạn nên dùng version phần
mềm như khóa học hướng dẫn.
Điều này tương tự với:
Bạn đang chơi 1 con game rất ngon trên Windows 7, bạn vác lên Windows 10 để chạy,
có điều gì để đảm bảo rằng “sẽ không có lỗi xảy ra” ?
Trong khóa học này, mình sử dụng version Node.js là 22.13.0
Vì vậy, để hạn chế tối đa lỗi có thể xảy ra, bạn vui lòng cài đặt chính xác version nodejs ở
trên
Khi code giống nhau, môi trường thực thi code giống nhau (version nodejs), thì rất
hiếm khi lỗi xảy ra.
Nếu đây là lần đầu tiên bạn học (coding) một dự án với Node.js, mình khuyến khích sử
dụng duy nhất 01 version Node.js (dễ quản lý)


Chỉ sử dụng nhiều version Node.js, khi và chỉ khi, trên bạn có nhiều dự án Node.js, và
mỗi dự án yêu cầu một version Node.js khác nhau. (hướng dẫn tại mục 3 bên dưới)
Link tải nodejs v22.13.0:
https://nodejs.org/download/release/v22.13.0/

Sau khi cài đặt xong, kiểm tra bằng cách gõ câu lệnh:
node -v

3. Trường hợp dùng nhiều version Nodejs
Lưu ý: bạn cần gỡ nodejs trước khi cài nvm
//áp dụng cho windows
https://github.com/coreybutler/nvm-windows

//áp dụng cho macos
Video hướng dẫn cài nvm cho mac, xem tại đây
https://dev.to/ajeetraina/how-to-install-and-configure-nvm-on-mac-os-5fgi
*/