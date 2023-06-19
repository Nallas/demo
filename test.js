/*Given the characters: "januaryjanuarymondaywednesdayfebruarythursdaydecember"
Question: 
- Print the month name from the character above!
Output: january, january, february, december
- How many month names are there?
Output: 3*/

let str1="januaryjanuarymondaywednesdayfebruarythursdaydecember"

let monthsName=['january','february','march','april','may','june','july','august','september','october','november','december']
let outCount=0;
let outResult=[]
let ouEle=[]
let val1= monthsName.forEach(element => {
    console.log(element)
    if(str1.includes(element)){
        outResult.push(element)
        outCount++
        // str1.slice(ouEle)
    }
});
console.log(outCount)
console.log(outResult)