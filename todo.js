let todos = [
    {
        id: 1,
        text: "помыть кота",
        date: "12342345",
        until:"23423434",
    },
    {
        id: 2,
        text: "помыть собаку",
        date: "23423445452",
        until:"23422453434",
    },
]

todos = [{
    id: 3,
    text: "asdfasdf",
    date: "asdasd",
    until:"asdasd",
}, ...todos];

console.log(todos);
// console.log(todos[0])
// todos.splice(0,1 ); // удаление
// пишем, что при клике на  элемент с id 1 он удаляется
// let result = todos.filter(
//     (item)=>item.id == 1)
//
// console.log(result)

// let data = todos.slice(0, 2)

// console.log(data)
console.log(todos)
