const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
inp.on("close",()=>{
  var a=n[0];
  var b=n[1].split(" ");
  var sum=0;
  //console.log(b);
  //console.log(b.length-1);
  for(var i=b.length-1;i>=4;i--)
  {
    sum+=parseInt(b[i]);
  } 
  //console.log(sum);
  var c=0;
  for(var i=0;i<b.length;i++)
  { 
    for(var j=i+1;j<b.length;j++)
    {
      for(var k=j+1;k<b.length;k++)
      {
        if(sum==parseInt(b[i])+parseInt(b[j])+parseInt(b[k]))
        {
          c=1;
        }
      }
    }
  }
    if(c==1)
      console.log("1");
    else
      console.log("0");
      
  });

       
