'use strict';

/*
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i=0;i<arr.length;i++) {
    for (let j=0;j<arr[i].length;j++) {
      product *= arr[i][j];
    }
  }
  
  // Only change code above this line
  return product;
}
  
// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
*/

//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
//if name === firstName , if prop === any property -> return property value
for (let i = 0; i<contacts.length; i++){
  console.log(Object.values(contacts)[i].firstName);
  console.log(contacts[i][Object.keys(contacts)[i]])
  if (name === contacts[i][Object.keys(contacts)[i]]){
      for (let j=0; j<Object.keys(contacts).length; j++){
          console.log(Object.keys(contacts)[j]);
          if (prop === Object.keys(contacts)[j]) {
              return Object.values(contacts)[j];
          }
          else {
              return 'No such property';
          }
      }
  }
  else {
      return 'No such contact';
  }
}
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));