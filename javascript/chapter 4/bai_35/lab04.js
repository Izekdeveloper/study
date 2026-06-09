/* 
#42. Bài Tập Lab 04
Yêu cầu: Tạo form đăng nhập đơn giản
Tạo một form html gồm:
- Input nhập username
- Input nhập password
- Button "Đăng nhập"
Khi người dùng nhấn nút “Đăng nhập”:
- Lấy giá trị từ hai ô nhập liệu
- So sánh với username/password đã định nghĩa sẵn trong JavaScript (hardcode)
username: hoidanit@gmail.com
password: 123456

Nếu đúng:
- Hiện thông báo "Đăng nhập thành công!" bằng alert()
- Redirect tới trang html (success.html)
Nếu sai:
- Hiện alert("Tài khoản hoặc mật khẩu sai")
- Đổi màu viền ô input thành đỏ (dùng .style.borderColor)

*/
const Btn = document.querySelector(".submit")
const user = document.querySelector(".inputUsername")
const pass = document.querySelector(".inputPassword")

const username = "hoidanit@gmail.com"
const password = 123456



//Lấy giá trị từ hai ô nhập liệu Khi người dùng nhấn nút “Đăng nhập”
Btn.addEventListener("click",() => {
    localStorage.setItem("infoUser",user.value)
    localStorage.setItem("infoPass",pass.value)
    console.log(user.value)
    console.log(pass.value)

if(user.value !== username && pass.value !== password){
    pass.style.borderColor = "red"
    user.style.borderColor = "red"
    return alert("Tài khoản hoặc mật khẩu sai");
}
else{
    window.open("./success.html","_blank"); //mo trang success.html o trang thu 2 ( co the dung the a thay vi window.open)
}
})

//So sánh với username/password đã định nghĩa sẵn trong JavaScript (hardcode)
//username: hoidanit@gmail.com
//password: 123456 
//Khi người dùng nhấn nút “Đăng nhập”:
/*
Nếu đúng:
- Hiện thông báo "Đăng nhập thành công!" bằng alert()
- Redirect tới trang html (success.html)

Nếu sai:
- Hiện alert("Tài khoản hoặc mật khẩu sai")
- Đổi màu viền ô input thành đỏ (dùng .style.borderColor)
*/
//so sanh o tren
