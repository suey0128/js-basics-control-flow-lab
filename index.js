
let distance;
function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
   return "This one is on me!";
  } else if (distance >2000 && distance <= 2500)  {
    return "I will gladly take your thirty bucks.";
    }
    else if (distance > 2500) {
    return "No can do."; 
    }
  }


function ternaryCheckCity(cityName){
  // Write your code here!
  // const ageMessage = age >= 18 ? "Congratulations! You're an adult!" : "Enjoy your childhood while it lasts!";
  return cityName == "NYC" ? "Ok, sounds good." : "No go.";
}



function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return "Bye.";
      break;
  }
}



// const order = 'cheeseburger';

// let ingredients;

// switch (order) {
//     case 'cheeseburger':
//         ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
//         break;
//     case 'hamburger':
//         ingredients = 'bun, burger, lettuce, tomato, onion';
//         break;
//     case 'malted':
//         ingredients = 'milk, ice cream, malted milk powder';
//         break;
//     default:
//         console.log("Sorry, that's not on the menu right now.");
//         break;
// } 