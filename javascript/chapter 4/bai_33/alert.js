/* 
#40. Alert (Extra)
1.Alert là gì?
alert( ) là hàm có sẵn trong JavaScript dùng để hiển thị một hộp thoại thông báo đơn
giản (popup) cho người dùng.
Khi xuất hiện, hộp thoại sẽ chặn toàn bộ trang web cho đến khi người dùng nhấn nút
"OK".

Ví dụ:
alert("Nội dung bạn muốn hiển thị");
*/
console.log("bai 33")
const element = document.getElementById("login")

element.addEventListener("click",() =>{
    console.log("click me")
    alert("login khong hop le")
})