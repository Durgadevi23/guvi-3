const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var user=[];
imp.on("line",(data)=>{
    user.push(data)
});
var res=[];
imp.on("close",()=>{
  var K=user[0];
  for(var i=1;i<=K;i++)
  {
    var a=user[i].split(" ");
    for(var j=0;j<a.length;j++)
    {
      res.push(parseInt(a[j]));
    }
    a=[];
  }
 
  res.sort(function(a,b){
      return a-b
  });
  console.log(res.join(" "));
});
INPUT
k = 3
1 3
2 4 6
0 9 10 11
OUTPUT
0 1 2 3 4 6 9 10 11
