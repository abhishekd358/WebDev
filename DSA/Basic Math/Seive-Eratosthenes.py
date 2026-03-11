
def countPrimes(n):
  # we make a array True . from 1--->n 
  primeArray = [True] * n

  # 1 & 0 = is not prime so we make index 1 as False
  primeArray[0] = primeArray[1] = False

  # now our prime number start from 2
  p = 2

  # we go first multiple of 2
  while(p<n):
    # first 2 will be True , and all its multiple became false
    if(primeArray[p]): # if current pointer is true then we make all it Multiple False
      for i in range(p*p, n, p):
        primeArray[i] = False  
    p+=1

  return sum(primeArray)
  

    

  

  

  
  

  
    








# ================= MY LOGIC which complexity is O(N^2)


# def countPrimes(n):
#   if(n <=1):
#     return 0
#   i = 2
#   arr= []
#   count = 0
#   while(i<n):
#     j = 2
#     isPrime = True
#     while(j < i):
#       if( i % j == 0):
#         isPrime = False 
#         break
#       j+=1

#     if isPrime:
#       arr.append(i)
#       count+=1
#     i+=1

#   print(arr)
#   return count



print(countPrimes(1000))