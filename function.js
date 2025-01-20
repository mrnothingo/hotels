// function add(a,b){
//     return a+b;
// }
//  var add = function(a,b){
//     return a+b
//  }
 
//var add = (a,b) => {return a+b;}

// 


//callback fn

// function callback(){
//     console.log("callback function successfully run")
// }

// const add = function(a, b, callback){
//     var result = a+b;
//     console.log("result:" +result); // main fn work completed
//     callback();
// }

// add(3, 4000000, callback);

const add = function(a, b, harsh){
    var result = a+b;
     console.log("result:" +result); // main fn work completed
     harsh();
 }

 add(990, 4, function(){
    console.log("function has ran")
 });

 add(3, 4,() => console.log("function has ran again"));
