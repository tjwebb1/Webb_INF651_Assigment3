/* Practice Assignment 3:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Construct a basic IF statement that assigns "Informatics" to the
// myDept variable IF the value of myNumber is greater than 1.
// The variables are already declared.
// Do not change the existing code.

const question1 = (myNumber) => {
    let myDept;
    if(myNumber > 1) {
        myDept = "Informatics";
    }
    return myDept;
  };
  
  // 2) Construct an IF statement that assigns "JavaScript" to the
  // myLang variable IF the length property of myValue is equal to 10.
  // Add an ELSE statement that assigns "Python" otherwise.
  // The variables are already declared.
  // Do not change the existing code.
  
  const question2 = (myValue) => {
    let myLang;
    if(myValue == 10) {
        myLang = "JavaScript";
    } else {
        myLang = "Python";
    }
    return myLang;
  };
  
  // 3) Copy the IF / ELSE statement from #2 and paste it below.
  // Add an ELSE IF statement to it that checks if the length property of
  // myValue is greater than 3. If true, assign "PHP" to myLang.
  // The variables are already declared.
  // Do not change the existing code.
  
  const question3 = (myValue) => {
    let myLang;
    if(myValue == 10) {
        myLang = "JavaScript";
    } else if(myValue > 3) {
        myLang = "PHP";
    } else {
        myLang = "Python";
    }
    return myLang;
  };
  
  // 4) Construct a SWITCH statement that will assign the following values to the variable
  // myFaveFood based on the value of myNumber the SWITCH statement receives:
  // 1 = Pizza, 2 = Hamburger, 3 = Ice Cream, 4 = Sushi, Anything else = Pho
  // The variables are already declared.
  // Do not change the existing code.
  
  const question4 = (myNumber) => {
    let myFaveFood;
    switch(myNumber) {
        case 1:
            myFaveFood = "pizza";
            break;
        case 2:
            myFaveFood = "hamburger";
            break;
        case 3: 
            myFaveFood = "ice cream";
            break;
        case 4:
            myFaveFood = "sushi";
            break;
        default:
            myFaveFood = "pho";
    }
    return myFaveFood;
  };
  
  // 5) Construct a TERNARY statement with the ternary operator
  // that checks if the variable myTemp is greater than or equal to 75.
  // If true, assign the value "Great weather!" to the variable myWeather.
  // If false, assign the value "Still cold." to the variable myWeather.
  // This ternary operator statement should just be one line of code.
  // The variables are already declared.
  // Do not change the existing code.
  
  const question5 = (myTemp) => {
    let myWeather;
    myWeather = (myTemp >= 75) ? "Great Weather!" : "Still Cold.";
    return myWeather;
  };