let bikeObj=[
{
    name:"honda cbr",
    cc:   "110cc",
    milage:70,
    Price:85000,
    Tyre:"tube"


},
{
    name:"honda unicorn",
    cc:   "125cc",
    milage:60,
    Price:100000,
    Tyre:"tubeless"


},
{
    name:"honda livo",
    cc:   "150cc",
    milage:40,
    Price:140000,
    Tyre:"tubeless"

}];
console.log(bikeObj)

console.log("***************using for loop to iterate bike names only*******")
let forloopfunc = function (){

    for(let i=0;i<bikeObj.length;i++)
    console.log(bikeObj[i].name);


}
     forloopfunc();


console.log("********************for-in loop use to itteration bike cc******************") 

let forinfunc= function(){
    for(let speed in bikeObj)
    console.log(bikeObj[speed].cc)

}
forinfunc();

console.log("********************for-of loop use to itteration bike cc******************") 

let forOffunc = function (){
for(let mil of bikeObj)
console.log(mil.milage);

}
forOffunc();

console.log("********************for-each loop use to itteration bike Price******************") 

function foreachfunc(a){

    console.log( "Bike Price is "    +`${a.Price}`)

}
bikeObj.forEach((a)=>foreachfunc(a));












