/*
Async/Await: Cú pháp cho code sạch đẹp
1.Async/Await là gì?
async/await là cú pháp hiện đại nhất trong JavaScript để xử lý bất đồng bộ, được giới
thiệu từ ES2017 (ES8).
Nó là một cách viết gọn gàng hơn cho Promise, giúp code đọc giống như code đồng bộ,
dễ hiểu và dễ bảo trì hơn.

2. So sánh với Promise
Promise:
getUser()
.then(user => getProfile(user))
.then(profile => getSettings(profile))
.then(settings => console.log(settings))
.catch(err => console.error(err));

async/await
async function showSettings() {
try {
const user = await getUser();
const profile = await getProfile(user);
const settings = await getSettings(profile);
console.log(settings);
} catch (err) {
console.error(err);
}
}
*/
console.log("bai 43")

//promise
fetch("http://localhost:8000/users") //goi api
.then(res => res.json())
.then(data => console.log("fetch promise: ",data))

//async await
const fetchData = async() => {
    const res = await fetch("http://localhost:8000/users"); //goi api , await giong nhu noi vs javascript la chay den dong nay thi doi no ra ket qua roi moi chay tiep(muon dung duoc await thi phai co function async)
    const data = await res.json() // neu ko co await thi no se hien pending
    console.log("fetch async/Await: " ,data)
}
fetchData()