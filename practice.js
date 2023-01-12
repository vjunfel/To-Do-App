/* 
This is a topic about array, map, filter and function
*/


// Arrays of objects
let myArray = [
    {
        firstName: "Junfel", 
        species: "Human",
        age: 30,
        Address:{
            Street: "Matumbo",
            City: "Lapulapu"
        },
        work(){
          console.log("is driving a car")  
        }
    },
    {
        firstName: "John", 
        species: "Robot",
        age: 45,
        Address:{
            Street: "Rizal",
            City: "Cebu"
        },
        work(){
            console.log("is washing a clothes")  
          }
    },
    {
        firstName: "Arnold", 
        species: "Robot",
        age: 17,
        Address:{
            Street: "Rizal",
            City: "Cebu"
        },
        work(){
            console.log("is drinking water")  
          }
    }
]


// map method will mutate the value but not changed it.
let myMap = myArray.map((name) => "hello, " + name.firstName)

function mapName(){
    console.log(myMap)
}
mapName()

// all arrays have access to a filter method.
let myfilter = myArray.filter(robotOnly)

function robotOnly(x){
    return x.species == "Robot"
}
console.log(myfilter)

function onlyOld(x){
    return x.age > 17
}
let oldOnlyNames = myArray.filter(robotOnly).filter(onlyOld)
console.log(oldOnlyNames)



// Grabing form and create function
let inputForm = document.querySelector("#myform")
let inputField = document.querySelector("#inputfield")
let myList = document.querySelector("#mylist")

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createItem(inputField.value)
})

function createItem(item){
    let listItem = `<li>${item} <button onclick="deleteItem(this)">Delete</button></li>`
    myList.insertAdjacentHTML('beforebegin', listItem )
    inputField.value=''
    inputField.focus()
}

// Create a function to delete the list Items
function deleteItem(elementToDelete){
    elementToDelete.parentElement.remove()
}
