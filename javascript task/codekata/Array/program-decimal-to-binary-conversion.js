*Given a number N in decimal convert it into binary value.
Input Size : N <= 100000
Sample Testcase :
INPUT
5
OUTPUT
101*/
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
var t=[];
var s='';
var r;
var l=[];
inp.on('close',()=>{
  t=n[0];
  while(t!=0)
  {
    r=parseInt(t%2);
    l.push(r);
    t=parseInt(t/2);
  }
 // console.log(s);
 for(var i=l.length-1;i>=0;i--)
 {
     s+=l[i];
 }
 console.log(s);
   
});program
