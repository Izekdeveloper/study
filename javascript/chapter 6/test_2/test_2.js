/*
Bài Tập Thực Hành 02
Yêu cầu: xây dựng table blog với data từ backend
Bước 1: Bạn cần chạy backend
npm run dev
Kiểm tra backend đã hoạt động chưa:
http://localhost:8000/
Kiểm tra API đã hoạt động chưa:
http://localhost:8000/blogs
Bước 2: Render tables
Thực hiện gọi API với fetch (lấy danh sách blogs)
//sử dụng async await

Id | Title | Author | Content | Action
1  | ...   | ...    | ...     | Button Xóa
2  | ...   | ...    | ...     | Button Xóa

Bước 3: Thêm mới blog
Tạo form thêm mới blog phía trên table (cùng page html), bao gồm
- 3 ô input: title, author, content
- 1 button submit
Khi nhấn nút submit thì:
Tạo mới blog bằng cách sử dụng fetch gọi API với method POST
https://stackoverflow.com/a/29823632
POST /blogs
body truyền lên object { title, author, content}


Sau khi tạo mới xong:
- Thêm row cuối của table với data vừa thêm mới
Gợi ý:
const tableBody = document.querySelector('#myTable tbody');
// Tạo phần tử dòng mới
const newRow = document.createElement('tr');
// Gán HTML cho dòng
newRow.innerHTML = `
<td>Người mới ${currentId}</td>
<td><button class="delete-btn" data-id="${currentId}">Xóa</button></td>
`;
// Thêm dòng vào cuối bảng
tableBody.appendChild(newRow);

Bước 4: Xóa blog
1. Lấy id của blog cần xóa
Gợi ý:
//với html, gán data attribute
<td><button class="delete-btn" data-id="1">Xóa</button></td>
// với javascript gán sự kiện click cho tất cả nút có class "delete-btn"
document.querySelectorAll('.delete-btn').forEach(function(button) {
button.addEventListener('click', function() {
const id = button.getAttribute('data-id');
});
});
2. Gọi api để xóa blog
Xóa 1 blog
DELETE /blogs/:id


3. Dùng javascript để xóa row
document.querySelectorAll('.delete-btn').forEach(function(button) {
button.addEventListener('click', function() {
const row = this.closest('tr');
row.remove();
});
});

*/
console.log("bai 45")


const saveBtn = document.querySelector(".saveBtn")

if(saveBtn){
    saveBtn.addEventListener("click",() => {
const Api_url = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    console.log("check data",data)
}
const currentBlogStr = localStorage.getItem("blog")
if (currentBlogStr) {
    const currentTodo = JSON.parse(currentBlogStr);
    currentTodo.push(Api_url)
    localStorage.setItem("blog",JSON.stringify(currentTodo))
}
else{
    localStorage.setItem("blog",JSON.stringify([Api_url]))
}
    });
}

const generalBlogs = () => {
    const todoListStr = localStorage.getItem("blog")
}
// dang dung o cho co gang in ra localstorage nhung chx in ra duoc  