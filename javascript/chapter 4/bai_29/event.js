/*
#36. Giới thiệu xử lý sự kiện (Events)
Tài liệu:
https://developer.mozilla.org/en-US/docs/Web/Events
1.Sự kiện là gì?
Sự kiện (event) là hành động do người dùng hoặc trình duyệt tạo ra khi tương tác với
trang web, ví dụ click, cuộn chuột...
=> Khi sự kiện xảy ra, JavaScript có thể thực hiện một đoạn mã để phản hồi lại sự kiện
đó.
Một số event thường gặp:
click Người dùng nhấn chuột
input Khi người dùng gõ vào ô nhập liệu
change Khi giá trị input hoặc select thay đổi
keydown Khi nhấn phím bất kỳ trên bàn phím
submit Khi gửi form

Gắn sự kiện trực tiếp trong HTML (cách làm basic)
<button onclick="sayHello()">Chào</button>
<script>
function sayHello() {
alert("Xin chào!");
}
</script>
Ưu điểm: Dễ viết, dễ hiểu cho người mới.
Nhược điểm: Không tách riêng JavaScript và HTML, khó bảo trì khi trang web lớn.
*/
console.log("bai 29")

const element = document.getElementById("myButton")
//      ☝️ element dat gi cung duoc
console.log(element)

//function de gan vao onclick trong html
function handleClickBtn(){
    console.log("you click a button")
}