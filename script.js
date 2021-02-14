
function howManySeconds(){
    
    var hour = document.getElementById('myInput');
    var sec =  3600 * (hour.value) ;
    document.getElementById('show_sec').innerText = "there are" +sec +"seconds in " + hour.value+ "hours" ;
    // console.log( sec);
}
// ============Two
function calcAge(){
    var age = document.getElementById('myAgeInput').value;
    var ageInDays = age * 365 ;
    var p = document.getElementById('show_age');
     p.innerText = 'Your age in days is '+ ageInDays
}
// ============Three
function invertedArray(e){
 var arr = e
 var nr =  arr.map(function(x) { return x * -1})
 console.log(nr) 
}
invertedArray([2 , 3, 2, -4]);

// ==============Four
function comp(a , b){
if(a.length === b.length ){
    console.log(true)
}else{
    return  console.log(false)
}
}
comp("AV", "D")
// ==============Five
function parseArray(e){
    var arr = e;
    var sarr = arr.map(function (e){return e.toString()});
    console.log(sarr)
}
parseArray([2 , "ad", 2,2] );

// ================SIX
function leapYear(e){
    if(e % 4 === 0){
        console.log( true)
    }else{
        console.log( false)
    }
}
leapYear(2021);
// ===============SEVEN
function endCorona(recoverd ,newCases ,active){
 
   var dailyDecrement = recoverd - newCases;
 var daysLeft =  active / dailyDecrement;
 
 console.log(Math.ceil(daysLeft))  
}
endCorona(3000, 2000, 50699);