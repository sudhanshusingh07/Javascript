//Declare a function fullName and it print out your full name.

function fullName(){
    console.log("Sudhanshu Singh");
}
fullName()

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function name(firstName, lastName) {
    console.log(firstName+" "+lastName);
}
name('Sudhanshu', 'Singh');

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b){
    console.log(a + b);
}
addNumber(2, 3);

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(l, b){
    return l * b;
}
console.log(areaOfRectangle(2, 4));

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(l, b){
    return 2*(l + b);
}
console.log(perimeterOfRectangle(2, 4));

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(l, w, h){
    return l * w * h;
}
console.log(volumeOfRectPrism(2, 4, 6));


//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
   pi = 3.14; 
   return pi * r *r;
}
console.log(areaOfCircle(3));


//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
   pi = 3.14; 
   return  2 *pi * r;
}
console.log(circumOfCircle(3))

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume){
   return  mass * volume;
}
console.log(density(3, 6))


