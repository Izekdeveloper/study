/*
Bài Tập Thực Hành 01
Yêu cầu: tạo ứng dụng todo list, kết hợp lưu trữ data với Local Storage
Bước 1: tạo mới todo
Tạo file create.todo.html, với nội dung sau:
form html để tạo mới todo, bao gồm:
- Input để nhập todo
- Button để submit
Khi nhấn nút submit, sẽ cần xử lý:
1. Lấy dữ liệu (tên todo) tại input
2. Lưu todo vào localStorage theo định dạng object { id, name}
Id của todo sẽ được random ngẫu nhiên (cần tham số này, để sau này xóa todo)
Ví dụ: data todo khi lưu: { id: 1, name: “learn javascript”}
LocalStorage sẽ lưu dưới định dạng array: localStorage.setItem(todo, data)
[
{ id: 1, name: “learn javascript”},
{ id: 2, name: “learn typescript”}
...
]
3. Lưu todo thành công, redirect về file video70.html
Bước 2: Hiển thị danh sách todo
Hiển thị danh sách todo dưới dạng table, data lấy từ localStorage, tương tự :
Id     | Name             |  Action
1      | Learn javascript | Button Xóa
2      | Learn typescript | Button Xóa


Bước 3: Xử lý hành động xóa todo
Khi nhấn vào button xóa trong table, sẽ tiến hành xóa todo. Sử dụng JavaScript để:
1. Lấy id của todo cần xóa
Gợi ý:
//với html, gán data attribute
<td><button class="delete-btn" data-id="1">Xóa</button></td>
// với javascript gán sự kiện click cho tất cả nút có class "delete-btn"
document.querySelectorAll('.delete-btn').forEach(function(button) {
button.addEventListener('click', function() {
const id = button.getAttribute('data-id');
});
});
2. Sử dụng hàm filter để xóa data localStorage
3. Xóa thành công, reload lại website để thấy kết quả
*/

console.log("bai 45")

const btn = document.querySelector(".btn")
const input = document.querySelector(".inputName")

btn.addEventListener("click",() => {
    const newTodo = {
        id: Date.now(), //random id
        name: input.value //lay gia tri value cua input
    }
   localStorage.setItem("name",JSON.stringify(input.value)) // chuyen sang chuoi string
   localStorage.setItem("id",newTodo.id) //lay id trong newTodo
   console.log(newTodo) //in ra newTodo

   const tbody = document.getElementById("btn")
if(newTodo && newTodo.length) { 
    newTodo.forEach((user,index) => {
        tbody.innerHTML += 
        `
         <tr> 
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>
                    <button> ${"xoa"}</button>
                </td>
            </tr>
        `
    });
}
})
