/*function getname(){
    var name = 'john';
    console.log(name);
}
getname();*/
function getBMI(){
    const mass = prompt("What is your mass");
    const height = prompt("What is your height");
    const BMI = mass / (height * height);
    console.log(BMI);
}
getBMI();