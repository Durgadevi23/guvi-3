const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const p=[];
inp.on('line',(data)=>{
  p.push(data);
});
var n;
var x;
var l=[];
var d;
var r=[];
var c=0;
inp.on('close',()=>{
  n=parseInt(p[0]);
  l=p[1].split(" ");
  for(var i=0;i<l.length;i++)
  { 
      c=0;
    for(var j=i+1;j<l.length;j++)
    {    
        
      if(l[j]%l[i]==0)
    { 
        //console.log(l[j],l[i]);
      c++;
    }
    }  
    r.push(c);
      //console.log(c);
    }
    //console.log(r);
     var res;
     res=r.sort();
    //console.log(res);
     var g;
     var k=0
     g=res[res.length-1];
     //console.log(g);
     for(var i=0;i<r.length;i++)
     {
         if(parseInt(r[i])==parseInt(g))
         {
             console.log(l[k]);
         }
         
     }
 
  });
