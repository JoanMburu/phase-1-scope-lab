// Write your solution in this file!
// Declaring a variable in the global scope
var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = "not bob";   
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "John";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Melvin";
}
// upperCaseCustomerName();
// setBestCustomer();

