const readline=require('readline')
const inp=readline.createInterface({
    input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
  });
inp.on("close",()=>{
    var b=user[1].split(" ");
    var num=user[1].split(" ");
    //var original=num;
   
    num.sort(function(a,b){
        return a-b;
    });
 

var su='';
var s=num[0]
var index1,index2;
var l=num[num.length-1];
for(var i=0;i<b.length;i++)
{
    if(b[i]==s)
    {
         index1=i;
    }
}
  su+=(index1+1)+' ';
for(var j=0;j<b.length;j++)
{
    if(b[j]==l)
    {
     index2=j;
    }
}su+=(index2+1);
  console.log(su);

});
