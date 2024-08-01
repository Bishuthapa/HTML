let string ="Bishu";
let size=0;
for(let i of str)
{
    console.log("i:", i);
    size++;
}
console.log("String size: ", size);
let str = "BISHU";
for(let i of str)
{
    console.log("i : ", i);
    size++;
}
console.log("string size is:" ,size);

let gameNum =25;
let userNum = prompt("Guess the game number:");
while(userNum!=gameNum)
{
    userNum=prompt("You enter tge wrong number guess the game number:");
}

console.log("Congrulation, you guessed the correct game number.");
console.log("good boy.");
