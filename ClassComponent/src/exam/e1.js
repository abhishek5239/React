

Array.prototype.incrByTwo=function (){
    let newArr=[]
    for(let i=0;i<this.length;++i)
    {
        newArr.push(this[i]+2)
    }
    return newArr
}
console.log(Object.prototype);

let arr=[1,2,3,4]
let newArr=arr.incrByTwo()
console.log(newArr);


let obj={
    abhi:"shek",
    ashu:()=>{
        console.log(this); 
    },
    niki:function (){
        console.log(this);
    }
}
obj.niki();  //? this will give you value as a object
// obj.ashu() //! this will give undefined

function newFun()
{
    this.a="abhi"
    this.b=this
    this.c=()=>{
        console.log(this);
    }
    this.d=function (){
        console.log(this);
    }
    function dd(){
        console.log("this "+this);
        
    }
    dd() // !undefined

}

let funC=new newFun()
console.log(funC.b);//?will give value
funC.c()// ? will give value
funC.d()//?will give value


function ab(){
    console.log(this);
}
ab()// ! undefined



function cfun()
{

    return function bfun()
    {
        console.log(this) //! because inside every normal function the this remains undefined.
    }
   
}
let fff=new cfun()
console.log("hi ",fff());
