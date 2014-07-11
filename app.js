// Create a calories calculator that 
    // Prompts the user for an initial weight
    // Prompts the user for a gender
    // Prompts the user for food items consumed
    // Prompts the user for the calories associated with those food items
    // Outputs a list of food consumed
    // Outputs the total calories consumed
    // Outputs weight (in pounds) that user has gained + the initial weight
    
var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

  
    // Prompts the user for an initial weight
    // Prompts the user for a gender

var weight = prompt('Current weight in lbs: ');
weight = parseInt(weight);

var gender = prompt('(M)ale or (F)emale: ');
var option = prompt('Enter any key to add a food item or (Q)uit: ');

    // Prompts the user for a list of food items consumed
    // Prompts the user for the calories associated with those food items

var food = [], calories = [] //Declare array variables

while (option.toLowerCase() != 'q') {

    // Prompts the user for a list of food items consumed
    // Prompts the user for the calories associated with those food items

  var item = prompt('What did you eat today? ');
  var itemCalories = prompt('How many calories was that item? ');
  itemCalories = parseInt(itemCalories);

    // Pushes food items added into list of food items
    // Pushes number of calories per food item into list of calories
 
  switch (gender){
    case 'm':
      food.push(item);
      calories.push(itemCalories);
      break;

    case 'f':
      food.push(item);
      calories.push(itemCalories);
      break;
  }

 option = prompt('Enter any key to add a food item or (Q)uit: ');
}

var sum = 0; //Declare initial sum for computations
var pounds; //Declare pounds variable to store weight gained

  // Calculate the number of calories consumed

  for (i = 0; i < calories.length; i++) {
  sum += calories[i];
  }

  // Calculate the number of pounds gained

  if(sum >= 4000 && gender === 'm') {
   pounds = sum/4000;
  } else if (sum >= 3000 & gender  === 'f'){
    pounds = sum/3000;
  } else if (sum < 4000 && gender === 'm'){
    pounds = 0;
  } else if (sum < 3000 && gender === 'f'){
    pounds = 0;
  } else {
    console.log('Calories to pounds was not computed');
  }

    // Conclusion
   // Outputs a list of the food consumed
  // Outputs the total of calories consumed
 // Outputs the weight (in pounds) that the user has gained + the initial weight
 
console.log('You consumed the following foods: ', chalk.blue(food));
console.log('Your calorie consumption: ', chalk.red(sum));
console.log('Your total weight is: ' + chalk.green((pounds + weight).toFixed(2)) + ' lbs.');
