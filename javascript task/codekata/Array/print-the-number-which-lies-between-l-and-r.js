const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const t=[];
inp.on('line',(data)=>{
  t.push(data);
});
var n,l,r,h,m;
var k=[];
var g=[];
inp.on('close',()=>{
  h=t[0].split(" ");
  n=parseInt(h[0]);
  l=parseInt(h[1]);
  r=parseInt(h[2]);
  k=t[1].split(" ");
  for(var i=0;i<k.length;i++)
  {    m=k[i];
    if(k[i]>=l && k[i]<=r)
    {
      g.push(k[i]);
      //console.log(k[i]);
    }
  }
  var res;
  res=g.sort();
  console.log(res[0]);
});
