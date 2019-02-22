function dataTypeCheck(type)
{
    if(type==null)
    {
        console.log("null")
        console.log(type)

       
    }
 
     else if(typeof(type)==='object'&& typeof(type[0])==='object')
    {
       
        console.log('type : Array of Object')
        b.map((x,i)=>{
            console.log(x);
        })
    }
    else if(typeof(type)=='number')
    {
        console.log("Number")
        console.log(type)

       
    }
    else if(typeof(type)=='undefined')
    {
        console.log("undefined")
        console.log(type)

       
    }
    else if(typeof(type)=='string')
    {
        console.log("string")
        console.log(type)

       
    }
    else if(typeof(type)==='boolean')
    {
        console.log("boolean")
        console.log(type)

       
    }
    else if(typeof(type)==='NaN')
    {
        console.log("NaN")
        console.log(type)

    }
    else if(typeof(type)==='object'&& typeof(type[0])!=='object' )
    {
        console.log("Array")
        a.map((y,i)=>{
            console.log(y);
        })
       
    }
    
    
}

a=[6,7,8,9];
b =[{"id":1},{"id":2},{"id":3},{"id":4}]
c=7
var d
var e='Kellton Tech'
n=true
var g=1-'w';
dataTypeCheck(a)
dataTypeCheck(b)
dataTypeCheck(c) 
dataTypeCheck(d)
dataTypeCheck(e)
dataTypeCheck(n)
dataTypeCheck(g)

