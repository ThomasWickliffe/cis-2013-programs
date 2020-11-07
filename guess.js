/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;  // sets the variables 

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = parseInt(prompt("Choose the lower number in the range. It must be at least Zero"));
while (intMin<0 || isNaN(intMin))
{
    intMin = parseInt(prompt("I'm sorry. You've entered an invalid number. Try again."));
}
// this section of code collects an input to set a low value for the guessing game and also validates that it is a valid entry.



/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt(prompt("Choose the higher number in the range. It must be at least two numbers higher then the lower number."));
while (intMax < intMin || intMax < intMin + 2 || isNaN(intMax))
{
    intMax = parseInt(prompt("I'm sorry. You've entered an invalid number. Try again."));
}
// this section of code collects an input to set a high boundary for the guessing game and also validates that it is a valid entry.



/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter

intCount = 1; //to initialize the loop

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

intGuess = parseInt(prompt("Pick a number to guess the random value."));           //This section collects the guess and checks to see if it fits the parameters
while (intGuess > intMax || intGuess < intMin || isNaN(intGuess))
{
    intGuess = parseInt(prompt("I'm sorry. You've entered an invalid number. Try again."));
}

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

 while (intGuess != intRandom)      //while the guess is incorrect it will run the loop
 {
  if (intGuess < intRandom)               //when the guess is too low it will ask to enter another number and then validates that its valid.
  {
    intGuess = parseInt(prompt("I'm sorry. Your guess is too low. Try again."));        
    while (intGuess > intMax || intGuess < intMin || isNaN(intGuess))               // this validates the guess again 
    {
    intGuess = parseInt(prompt("I'm sorry. You've entered an invalid number. Try again."));
    }
  }
  else                                      //when the guess is too high it will ask to enter another number and then validates that its valid.
  {
    intGuess = parseInt(prompt("I'm sorry. Your guess is too high. Try again."));
    while (intGuess > intMax || intGuess < intMin || isNaN(intGuess))
    {
    intGuess = parseInt(prompt("I'm sorry. You've entered an invalid number. Try again."));      // this validates the guess again 
    }
  }
  intCount++;           // this like increments the counter to check how many guesses were made or loops ran. 
 }
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");

