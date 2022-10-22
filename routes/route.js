const express = require("express");
const router = express.Router(); ///test-you
//importing a custom module
const xyz = require("../logger");
//importing external package
const underscore = require("underscore");
const _ = require("lodash");
//import logger module
const wel = require("../logger1/logger");
const help = require("../util/helper");
const format = require("../validator/formatter");

router.get("/test-me", function (req, res) {
  //Calling the components of a different custom module
  console.log("Calling my function ", xyz.myFunction());
  console.log("The value of the constant is ", xyz.myUrl);
  console.log(wel);
  console.log(format);
  console.log(help.getBatchInfo());
  
function lodash() {
  let month1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(_.chunk(month1, 4));

  const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(_.tail(oddNum, 9));

  const Num = [2, 5, 4, 2, 7];
  console.log(_.union(Num));

  const keyValue = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];
  
  console.log(_.fromPairs(keyValue));
}
console.log(lodash());
  // console.log(lodash.lodash());
  // console.log(lodash.welcome());
  //Trying to use an external package called underscore
  let myArray = ["utkarsh badoni", "binny", "vinny", "vinayak badoni"];
  let result = underscore.first(myArray);
  console.log("The result of underscores examples api is : ", result);
   
  res.send("My first ever api!");

  //To be tried what happens if we send multiple response
  //res.send('My second api!')
});

module.exports = router;
