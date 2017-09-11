//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {


  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  reverseIt:(toReverse)=>toReverse.split("").reverse().join(""),


  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates
  removeDups:(toClean)=>{
    let newArr=[];
    toClean.forEach((cur,i)=>{
      if(!newArr.includes(cur)){
        newArr.push(cur);
      }
    })
    return newArr;
  },


  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word
  titleIt:(toCap)=>{
    return toCap.split(' ').map((cur)=>cur[0].toUpperCase()+cur.substring(1)).join(" ");
  },




  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string
  vowelCounter:(toCount)=>{
    return toCount.match(/[aeiou]/ig).length;
  },


  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not
  isPrime:(checkPrime)=>{
    if(checkPrime<=1){
      return false;
    }
    let x=2;
    while(x*x<=checkPrime){
      if(checkPrime%x===0){
        return false;
      }
      x++;
    }
    return true;
  },


  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo:"1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1:"Hello World",
  log2:undefined,
}
