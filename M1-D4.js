/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let a = [ 1, 2, 3, 4, 5]

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let myInfo = {
    name: "Ahmed",
    surname: "Adegbami",
    email: "ahmed.adegbami@gmail.com",
    age: 32
}

console.log("This is my details:", myInfo)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

myInfo.driverlicense = false
console.log("This is my details with DL:", myInfo)


/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete myInfo.age
console.log("This is my details without age:", myInfo)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let mySon = {
    name: "Adam",
    surname: "Adegbami",
    email: "adam.adegbami@gmail.com",
    age: 8
}

console.log(myInfo.email === mySon.email)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = [ 5, 15, 10, 20, 18]

// let currentNumber = 0
// let sum = totalShoppingCart.reduce((sum, currentNumber) => sum + currentNumber)

// console.log(sum)

let sum = 0;
for (let i = 0; i < totalShoppingCart.length; i++) {
    sum += totalShoppingCart[i]
}
console.log(sum)

if (sum > 50) {
    console.log(sum, ".You enjoyed a free shipping")
} else {
    console.log(sum + 10, ". €10 shipping fee ")
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let discount = (20/100) * sum

let totalCost = sum - discount
console.log(totalCost)
if (totalCost > 50) {
    console.log(totalCost, ".You enjoyed a free shipping")
} else {
    console.log(totalCost + 10, ". €10 shipping fee ")
}



/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let myRedCar = {
    brand:"Mercedes-Benz",
    model:"E-klasse",
    licencePlate:"HH K 7431",
}

let myBlueCar = {}
Object.assign(myBlueCar, myRedCar)
myBlueCar.licencePlate = "HH A 8438"

let myGreenCar = {}
Object.assign(myGreenCar, myRedCar)
myGreenCar.licencePlate = "HH Z 4647"

let myOrangeCar = {}
Object.assign(myOrangeCar, myRedCar)
myOrangeCar.licencePlate = "HH J 9393"

let myWhiteCar = {}
Object.assign(myWhiteCar, myRedCar)
myWhiteCar.licencePlate = "HH F 8620"

let myBlackCar = {}
Object.assign(myBlackCar, myRedCar)
myBlackCar.licencePlate = "HH R 7542"



console.log(myRedCar, myBlueCar, myGreenCar, myOrangeCar, myWhiteCar, myBlackCar)



/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
console.log("\n  THE CARS IN ARRAY")

let carsForRent = [myRedCar, myBlueCar, myGreenCar, myOrangeCar, myWhiteCar, myBlackCar]
console.log(carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n I WILL CUT THE FIRST AND LAST")
carsForRent.splice(0,1)
carsForRent.splice(4,1)
console.log(carsForRent)


console.log("ANOTHER WAY WITH SHIFT AND POP SINCE IT IS THE FIRST AND LAST ELEMENT")

carsForRent = [myRedCar, myBlueCar, myGreenCar, myOrangeCar, myWhiteCar, myBlackCar]
carsForRent.shift()
carsForRent.pop()
console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
 console.log(typeof myRedCar, typeof myRedCar.licencePlate, typeof myRedCar.brand)
 

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [
   {
    brand: 'Mercedes-Benz',
    model: 'E-klasse',
    licencePlate: 'HH Z 4647'
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-klasse',
    licencePlate: 'HH J 9393'
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-klasse',
    licencePlate: 'HH F 8620'
  } 
]
 console.log(carsForSale.length + carsForRent.length)


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

let index = 0
while (index < carsForSale.length){
    console.log(carsForSale[index].brand);
    console.log(carsForSale[index].model);
    console.log(carsForSale[index].licencePlate)
    index++
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/