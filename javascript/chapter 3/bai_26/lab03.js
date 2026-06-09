/*
#32. Bài Tập Lab 03
Yêu cầu:
Hãy tạo một mảng products chứa danh sách 5 sản phẩm, mỗi sản phẩm là một object
có các thuộc tính:

- name (tên sản phẩm)
- price (giá sản phẩm)
- inStock (true/false – còn hàng hay không)

Ví dụ:
{
name: "T-shirt",
price: 200,
inStock: true
}
Hãy thực hiện:
1. In ra tên của sản phẩm đầu tiên.
2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
5. Dùng forEach( ) để in ra tất cả tên sản phẩm.
6. Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.
7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true).
8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên.
*/

/*
- name (tên sản phẩm)
- price (giá sản phẩm)
- inStock (true/false – còn hàng hay không)
*/
const sp1 = {
    name: "T-shirt",
    price: 200000,
    inStock:true,
}
const sp2 = {
    name: "quần",
    price: 300000,
    inStock:true,
}
const sp3 = {
    name: "đồng hồ",
    price: 400000,
    inStock:true,
}
const sp4 = {
    name: "túi hiệu",
    price: 1000000,
    inStock:false,
}
const sp5 = {
    name: "giầy",
    price: 100000,
    inStock:true,
}
const product = [sp1,sp2,sp3,sp4,sp5]

console.log("1. ==============================")
//1. In ra tên của sản phẩm đầu tiên.
const firstProduct = product[0];
console.log("sản phẩm đầu tiên:" ,firstProduct.name)

console.log("2. ==============================")
//2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
const product_3 = [sp1,{name:sp2.name,price:150000,inStock:sp2.inStock},sp3,sp4,sp5]
console.log("tất cả sản phẩm sau khi thêm sửa giá sp2: ",product_3)

console.log("3. ==============================")
//3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
product.push({
    name: "dép",
    price: 10000,
    inStock: false,
})
console.log("tất cả sản phẩm sau khi thêm 1 sản phẩm mới ở cuối: ",product)

console.log("4. ==============================")
//4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
product.pop()
console.log("tất cả sản phẩm sau khi xóa sản phẩm cuối:",product)

console.log("5. ==============================")
//5. Dùng forEach( ) để in ra tất cả tên sản phẩm.
product.forEach((item,index) => {
    console.log("tên sản phẩm: ",item.name)
})

console.log("6. ==============================")
//6. Dùng map( ) để tạo mảng mới chỉ chứa giá sản phẩm.
product.map((item,index) => {
    console.log("product price: ",item.price)
})

console.log("7. ==============================")
//7. Dùng filter( ) để lấy các sản phẩm còn hàng (inStock = true).
const inStockProduct = product.filter((item,index) => {
    return item.inStock === true;
})
console.log("instock product: " ,inStockProduct)

console.log("8. ==============================")
//8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên.
const first_Product = product.sp1
for(let key in firstProduct) {
    console.log(key,firstProduct[key])
}