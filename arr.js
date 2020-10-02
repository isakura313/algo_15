const arr = [1, 4, 5, 6, 7, 3, 5, 57, 3];

const_arr = [];

arr.forEach((el)=>{
    const_arr.push(el**2);
    // может положить в другой массив
})

const const_arr_1 = arr.map((el)=>{
    arr.push(el)
})

console.log(const_arr)

console.log(arr);
console.log(const_arr_1 );
