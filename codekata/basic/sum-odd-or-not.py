#check whether the sum of two numbers is odd or even

N,M=map(int,input().split())
sum=N+M
if(sum%2==0):
  	print("even")
else:
  	print("odd")
