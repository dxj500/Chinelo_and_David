///////// Exercise 1 /////////

//  Declare a function checkLength that takes a phone number (as a string) as argument, 
// and returns true if this phone number contains 10 characters or less.
const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];

const checkLength = (numbers) => {
    if (numbers.length <= 10) {
        return true;
    } else {
        return false;
    }
};


// Now declare a function filterLongNumbers that takes an array of phone numbers. 
// This function should return only numbers that contain 10 characters or less. 
// It should make use of the function checkLength written previously

const filterLongNumbers = (numbers) => {
  // return checkLength(numbers)
  
  const filteredArray = numbers.filter(checkLength);
  console.log(filteredArray);
  
};

filterLongNumbers(numbers)

//////// Exercise2 /////////// 

// create a function that takes a single name and generate the correct message for it.
// use Array's map method to generate the list of personalised messages using this function.
// Questions:
// Write a function generateMessages that takes an array of names and returns an array 
// of personalised messages for each name. For example, when given the array above, 
// the function should return an array with the first element being the string 
// 'Hi Anna! 50% off our best candies for you today!', 
// the second element the string 'Hi Laura! 50% off our best candies for you today!', and so on.

const namesAndDiscount = [
{ name: 'Anna', discount: 50 },
{ name: 'Laura', discount: 40 },
{ name: 'Josh', discount: 30 },
{ name: 'Min', discount: 50 },
{ name: 'Karla', discount: 60 }
];

const generateMessages = (namesAndDiscount) =>{
  return `Hi ${namesAndDiscount.name}! ${namesAndDiscount.discount}% off our best candies for you today!`
  };


const personalisedMessage = (namesAndDiscount) => {
  console.log(namesAndDiscount.map(generateMessages));
}

personalisedMessage(namesAndDiscount)

