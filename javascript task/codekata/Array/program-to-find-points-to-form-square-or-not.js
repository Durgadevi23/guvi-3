const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data)
});
inp.on('close',()=>{
  var a=n[0].split(" ");
  var k=parseInt(a[0]);
  var i=parseInt(a[1]);
  var b=n[1].split(" ");
  var d=parseInt(b[0]);
  var s=parseInt(b[1]);
  var c=n[2].split(" ");
  var r=parseInt(c[0]);
  var t=parseInt(c[1]);
  var e=n[3].split(" ");
  var h=parseInt(e[0]);
  var p=parseInt(e[1]);
  var sum=0,sum1=0;
  sum=sum+k+d+r+h;
  sum1=sum1+i+s+t+p;
  if(sum==sum1)
    console.log("yes");
  else
    console.log("no");
});
