// Create a function which returns a string template. The template is the HTML representation for a food item.
const foodHtmlTemplate= (foodobject)=> {
let foodHTML= `<section class="foodSection">
             <h1>${foodobject.name}</h1>
             <p>${foodobject.type}</p>
             <p>${foodobject.ethnicity}</p>
         </section>`
        return foodHTML
        }   
// Create a function that inserts an HTML representation of a food into the DOM
const insertFoodToDom= (foodHTML) => {
let foodList=document.querySelector(".foodList")
foodList.innerHTML += foodHTML
}
// fetch call using functions
   fetch("http://localhost:8088/food")
    .then(food => food.json())
    .then(parsedFoods => {
        parsedFoods.forEach(foods => {
            let foodReturned= foodHtmlTemplate(foods)
            insertFoodToDom(foodReturned)  
        })})
