// Map function
let names = ["Jackson", "Palmer", "Enzo", "Pedro", "Pedro", "Pedro"];

// names.map((name) => {
//     console.log(name);
// })

names.map((name) => {
    return name + "1";
})

// Filter
names.filter((name) => {
    return name !== "Pedro"
})