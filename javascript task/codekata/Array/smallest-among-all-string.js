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
var c=0;
inp.on('close',()=>{
  d=parseInt(p[0]);
  for(var i=1;i<p.length;i++)
  {   //console.log(p[i]);
    l.push(p[i].length);
    //console.log(l[i]);
  }
var res;
res=l.sort();
var j;
for(var i=1;i<p.length;i++)
{
j=p[i].length;
if(j==res[0])
{
   console.log(p[i]);
}
}
    
  });
