function scuberGreetingForFeet(x){
  // Write your code here!
  let y
  if (x<=400){
    const message = 'This one is on me!'
    return message
  } else if (x>400 && x<2000){
    return "That will be twenty bucks."
  }else if (x>2000 && x<2500){
    return "I will gladly take your thirty bucks."
  } else if (x>2500) {
    return "No can do."
  } 
}

function ternaryCheckCity(name){
  // Write your code here!

    return name === 'NYC' ? 'Ok, sounds good.':'No go.';
  
}

function switchOnCharmFromTip(x){
  // Write your code here!

  switch(true){
    case x === 'generous':
    return 'Thank you so much.';

    case x === 'regular':
    return 'Thank you.';

    default:
    return 'Bye.';
  }
}