/*
Bài Tập Lab 05
Yêu cầu: xây dựng table users với data từ backend
Bước 1: Bạn cần chạy backend
npm run dev
Kiểm tra backend đã hoạt động chưa:
http://localhost:8000/
Kiểm tra API đã hoạt động chưa:
http://localhost:8000/users
Bước 2: Thực hiện gọi API với fetch (lấy danh sách users)
//sử dụng async await

Bước 3: Sử dụng javascript render table
Render động dữ liệu của table html dựa vào javascript và data của api
Tham khảo template table html tại đây
Gợi ý cách sử dụng javascript để chèn động nội dung cho table:
const tbody = document.querySelector("#myTable tbody");
tbody.innerHTML += `<tr><td>data 1</td><td> data 2</td></tr>`;

*/
const fetchData = async () => {
    const res = await fetch("http://localhost:8000/users"); //goi api gan cho res
    const data = await res.json(); //chuyen tu dang response sang file json va gan vao data
    console.log("check data : " ,data) //in ra de check an api chx

    const tbody = document.querySelector(".listUser tbody") //lay id tu class listUser va the con cua no

    if(data && data.length) { //neu co data thi chay dong ben duoi
        data.forEach((user,index) => { //lap qua user va index
            tbody.innerHTML += //+= de noi chuoi
            //tao ra cac the td va tr trong html
            `
            <tr> 
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
            ` 
        })
    }
}
fetchData() //chay tat ca len o tren