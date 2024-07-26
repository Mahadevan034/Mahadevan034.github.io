const a=prompt("enter a number")
function myfun(a)
{
    let count=0;
    for(let i=2;i<a;i++)
    {
        if(a%i==0)
        {
            count++;
            break;
        }
    }
    if(count==1)
    {
        console.log("not a prime number");
    }
    else{
        console.log("prime number");
    }
}
myfun(a)