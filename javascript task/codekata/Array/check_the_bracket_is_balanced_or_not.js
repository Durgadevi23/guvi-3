  
/*Given a string S consisting of only '(' and ')', print 'yes' if it is balanced otherwise print 'no'.
Sample Testcase :
INPUT
(())
OUTPUT
yes*/
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const n=[];
inp.on('line',(data)=>{
  n.push(data);
});
var t=[];
var k;
var c=0;
var res=[];
inp.on('close',()=>{
  t=n[0].split("");
  for(var i=0;i<t.length;i++)
  {
    k=t[i];
   for(var j=0;j<t.length;j++)
   {
     if(k==t[j])
     {
       c++;
        //console.log(k);
         break;
     }
   }
  }
  //console.log(c);
  //console.log(t.length);
  if(c==t.length)
    console.log("yes");
  else
    console.log("no");
});
  
  
