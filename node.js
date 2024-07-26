
function my()
{
    console.log("maha")
}

my()

// const arr=[1,2,3,4,5,6];
// console.log(arr[0],arr[1]);

// let a=10,b=15;
// let c=a>b?a:b;
// console.log(c);

let driver =18;
if(driver)
    console.log("You passed")
else
  console.log("you failed")

function passed(driver)
{
    driver>=18 ? console.log("You passed"): console.log("you failed")
}
const myfu=function(driver)
{
    driver>=18 ? console.log("You passed"): console.log("you failed")
}
const mys = (driver)=>{
    driver>=18 ? console.log("You passed"): console.log("you failed")
}

const greed=()=>
{
    console.log("jd")
}
greed()
mys(driver)

const fruit=(f)=> f*4;

console.log(fruit(4))

let arr=[1,2,4,5,5,6];
arr.push(7)
arr.unshift(0);
console.log(arr)
arr.pop();
arr.shift();
console.log(arr.lastIndexOf(5));
console.log(arr)
console.log(...arr)

console.log(arr[3])

const [x,y,...z]=arr;
console.log(x,y,z)