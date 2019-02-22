function dataTypeCheck(type)        //function begins
{
    if(type==null)
    {
        console.log('type : null')
        console.log(type)
    }
 
     else if(typeof(type)==='object'&& typeof(type[0])==='object')
    {
       
        console.log('type : Array of Object')
        b.map((x,i)=>{              //method to show the array of object using map function
            console.log(x);
        })
    }
    else if(typeof(type)=='number')
    {
        console.log('type : Number')
        console.log(type)

       
    }
    else if(typeof(type)=='undefined')
    {
        console.log('type : undefined')
        console.log(type)

       
    }
    else if(typeof(type)=='string')
    {
        console.log('type : string')
        console.log(type)

       
    }
    else if(typeof(type)==='boolean')
    {
        console.log('type : boolean')
        console.log(type)

       
    }
    else if(typeof(type)==='NaN')
    {
        console.log('type : NaN')
        console.log(type)

    }
    else if(typeof(type)==='object'&& typeof(type[0])!=='object' )
    {
        console.log('type : Array')
        a.map((y,i)=>{              //method to show the array using map function
            console.log(y);
        })
       
    }
    
    
}       //function ends

//Inputs

a=[6,7,8,9];
b =[{"id":1},{"id":2},{"id":3},{"id":4}]
c=7
var d
var e="Kellton Tech"
n=true
var g=1-'w';    //input for NaN
dataTypeCheck(a)
dataTypeCheck(b)
dataTypeCheck(c) 
dataTypeCheck(d)
dataTypeCheck(e)
dataTypeCheck(n)
dataTypeCheck(g)

