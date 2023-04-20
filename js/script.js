// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function generates a response to the user telling them what movies they can watch alone.
 */
function MovieStandardResponse () {
  // initializing variables userAge and displayAns
  let userAge = parseInt(document.getElementById('user-age').value);
  let displayAns = "";
  

  // response for when user age is less than or equal to 0 
  if (userAge <= 0){
    displayAns = "Please enter a valid age."
  }
  // response for when user age is 17 or greater
  else if (userAge >= 17){
    displayAns = "You can see an R rated movie alone."
  }
  // response for when user age is 13 or greater (still less than 17)
  else if (userAge >= 13){
    displayAns = "You can see a PG-13 movie alone."
  }
  // response for when user age is 5 or greater (still less than 13)
  else if (userAge >= 5){
    displayAns = "You can see a G and PG rated movie alone."
  }
  // response for when user age is less than 5 
  else if (userAge < 5){
    displayAns = "You cannot see any movies alone."
  }
  // response for when user does not enter an age
  else if (userAge >= "") {
    displayAns = "Please enter your age."
  }
  // display response to user
  document.getElementById('response').innerHTML = displayAns
}