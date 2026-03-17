class Solution:
    def moveZeroes(self, nums):
       
        n = len(nums)
        if(n <= 1):
            return nums
        temp = []
        countZero = 0
        for i in range(n):
            if( nums[i] ==0 ):
                countZero +=1
            else:
                temp.append(nums[i])
            
        for i in range(countZero):
            temp.append(0)
        
        nums[:] = temp
        return nums


print(moveZeroes([0,1,0,3,12]))


