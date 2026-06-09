/*
Promise: Lời hứa từ tương lai
Tài liệu:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/P
romise#examples
1.Promise là gì?
Trong JavaScript, Promise là một đối tượng đại diện cho một giá trị sẽ có trong tương
lai, thường là kết quả của một tác vụ bất đồng bộ như:
- Gọi API
- Đọc file
- Truy vấn cơ sở dữ liệu
Nói cách khác: Promise giống như một lời hứa:
"Tôi sẽ cung cấp kết quả sau – hoặc thành công, hoặc thất bại!"

3 trạng thái của Promise
Trạng thái       | Mô tả
pending          | Chưa có kết quả – đang xử lý
fulfilled        | Thành công – trả về kết quả (resolve)
rejected         | Thất bại – trả về lỗi (reject)

//todo: Sử dụng Promise: .then() và .catch()
*/

console.log("bai 39")

console.log("1")

//bat dong bo (async)
setTimeout(() => {
    console.log("2 cua dong bo")
},1000)

console.log("3")

const myPromise = () => { //thanh cong hoac that bai (resolve,reject)
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("2 with promise")
            //return
            resolve("fuck") //string ngau nhien, resolve nay no giong nhu return cua promise
        },2000)
    })
}
//cach 1
//promise noi cho chung ta biet khi nao thi code moi goi xong
const test = myPromise()
console.log("test",test) //Promise { <state>: "pending" }

console.log("==================== with promise blow")
console.log("1")
//cach 2
//then la khi nao moi co ket qua
//lay ket qua tu resolve
myPromise().then(data => {
    console.log("data",data)
    console.log("3")
})