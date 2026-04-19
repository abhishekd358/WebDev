
def maxSubArray(nums):
    temp = [] # for sub-array print
    
    maxSum = float('-inf')
    currSum = 0
    for i in range(len(nums)):
        # har ek element par jayenge sum calualte karenge
        currSum += nums[i]
        
        # yaha sum ko add karenge
        if currSum > maxSum:
            maxSum = currSum
            temp.append(nums[i]) # -------> if u want array print so use this 
        

        # -- if sum negative hai to aage badenge , or currSum ko 0 karnege
        if currSum < 0:
            currSum = 0
          
    # print(temp) 
    return maxSum

        

    
print(maxSubArray( [2, 4,5,-10, 6 ,7,-2, -56]))


        