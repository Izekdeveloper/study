/*
#26. Duyệt mảng với vòng lặp và forEach
1.Duyệt mảng bằng vòng lặp for
Ví dụ:
let scores = [80, 90, 70];
for (let i = 0; i < scores.length; i++) {
console.log("Phần tử thứ " + i + ": " + scores[i]);
}

2.Duyệt bằng forEach( )
let names = ["Alice", "Bob", "Charlie"];
names.forEach(function(name, index) {
console.log(index + ": " + name);
});
//todo: sử dụng arrow function
*/
console.log("bai 20")

const myClass = ["fuck","bla","ble","blu"]
console.log(myClass, myClass.length)

console.log("=========================")
for(let i = 0;i < myClass.length;i++){ //lap tu 0 den 4 tuc la du 5 phan tu
    console.log("i = ",i, "and value = ",myClass[i])
    /*
i =  0 and value =  fuck
i =  1 and value =  bla
i =  2 and value =  ble
i =  3 and value =  blu
*/
}
console.log("==============================")
// for-each
//function
myClass.forEach(function(value,index){ //foreach lap tung phan tu mot va su dung truc tiep gia tri cua tung phan tu do
    console.log("value = ",value,"index = ",index)
})

console.log("==============================")
//arrow function
myClass.forEach((value,index) => {
    console.log("value = ",value,"index = ",index)
})
