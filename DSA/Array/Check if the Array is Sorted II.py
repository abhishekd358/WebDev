def isSorted(nums):
    i = 0
    while(i < len(nums)-1):
        if(nums[i] <= nums[i+1]):
            i+= 1
        else:
            return False
            
    return True



print(isSorted([1, 2, 3, 5, 5, 7, 7, 7, 8, 12]))
