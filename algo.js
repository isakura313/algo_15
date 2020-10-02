let num = [1, 15, 6, 4, 6, 3, 6, 5, 7];



// нам нужно оставить только уникальные значения
const uniq = []
num_dubl = [...num];


// изначальный массив должен остаться нетронутым
num_dubl.sort((a, b)=>{
    return a - b;
})
console.log(num)
for (let i = 0; i < num_dubl.length; i++){
    if(num_dubl[i] == num_dubl[i+1]){
        continue;
    } else{
        uniq.push(num_dubl[i])
    }
}
console.log(uniq)
console.log(num)
