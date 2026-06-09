/*
Callback và vấn đề Callback Hell
1.Callback là gì?
Trong JavaScript, một callback là một hàm được truyền vào như một đối số cho một
hàm khác, và sẽ được gọi lại (callback) sau khi hàm kia thực hiện xong công việc của
nó.
Callback thường được dùng trong các tác vụ bất đồng bộ (asynchronous) như:
- Đọc file
- Gọi API
- Chờ đợi sự kiện
Ví dụ:
function greet(name, callback) {
console.log("Hi " + name);
callback();
}
function sayGoodbye() {
console.log("Goodbye!");
}
greet("hoidanit", sayGoodbye);
2.Callback Hell là gì?
Callback Hell (địa ngục callback) là thuật ngữ mô tả việc lồng quá nhiều callback bên
trong nhau, khiến code trở nên khó đọc, khó bảo trì..
- Mã lồng nhau nhiều tầng (“pyramid of doom” – hình kim tự tháp)
- Khó kiểm soát luồng dữ liệu
- Khó bắt lỗi
- Gây mệt mỏi cho lập trình viên khi bảo trì


Ví dụ về callback hell:
loginUser("hoidanit", function (user) {
getUserProfile(user.id, function (profile) {
getUserSettings(profile.id, function (settings) {
updateUI(settings, function () {
console.log("Hoàn thành!");
});
});
});
});
*/
console.log("bai 42")
const greeting = ( name,callback) => {
    console.log("Xin chao", name)
    callback()
}
const hello = () => {
    console.log("learn callback...")
}

const hi = () => {
    console.log("say hi")
}

greeting ("Fuck your momy",hello)
greeting("bla bla",hi)