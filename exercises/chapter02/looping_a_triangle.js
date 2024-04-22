/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
####### 
*/

const outputCharacter = "#";

for (let i = 0; i < 7; i++) {
  const numberOfRepetitions = i + 1;
  console.log(Array(numberOfRepetitions).fill(outputCharacter).join(""));
}
