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

const saveBtn = document.querySelector(".btnSave");
const input = document.querySelector(".inputName");

if(saveBtn) {
saveBtn.addEventListener("click",() => {
const info_id_name = {
        id: Date.now(), //random id
        name: input.value //lay gia tri value cua input
    }

    const currentTodoStr = localStorage.getItem("todo")
    //da ton tai todo trc do
    if(currentTodoStr ) {
        //convert string to object
        const currentTodo = JSON.parse(currentTodoStr)
        //push them todo
        currentTodo.push(info_id_name)
        localStorage.setItem("todo",JSON.stringify(currentTodo)) // convert object to string
    }else {
   localStorage.setItem("todo",JSON.stringify([info_id_name])) // convert object to string
    }
    //success
    window.location.href="./index.html";
    });
}
const generalTodoTable = () => {
    const todoListStr = localStorage.getItem("todo"); //get item in localstorage
    if(todoListStr){
    const todoList = JSON.parse(todoListStr); // convert string to object
    console.log(todoList);
    //insert data in html
    const tbody = document.querySelector(".info_table tbody");
    if(todoList && todoList.length ){
        todoList.forEach((todo,index) => {
            tbody.innerHTML += 
            `
            <tr>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td><button data-id=${todo.id}
            class="btnDelete" >xoa</button></td>
            </tr>
            `
        });
    }

    }
}
generalTodoTable()

const deleteBtns = document.querySelectorAll(".btnDelete")
if(deleteBtns) {
    deleteBtns.forEach((btn,index) =>{
        console.log(btn,index)
        btn.addEventListener("click",() => {
            const id =  btn.getAttribute("data-id")
            handleDeleteTodo(id)
        })
    })
}

const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem("todo");
    if(todoListStr){
    const todoList = JSON.parse(todoListStr);
    console.log(todoList, id)
    const newTodo = todoList.filter((todo,index) => todo.id +"" !== id);
    localStorage.setItem("todo", JSON.stringify(newTodo))
    window.location.reload();
    }
}