def twoSum(nums, target):

    # using hasing
    hash = {}
    for i in range(len(nums)):
        hash[nums[i]] = i    # numeber : index


    for i in range(len(nums)):
    # now we check in hash  the diff
        diff = target - nums[i]
        if(diff in hash) and (hash[diff] != i):  
            return [i, hash[diff]]
     
# ================================== 🔴 time complexity O(n2) 

    '''

    for i in range(len(nums)):
        secondVal =  target - nums[i] 
        if(secondVal in nums[i+1:]):
            secIndex = nums.index(secondVal, i+1)
            return [i, secIndex]
    return arr

    '''

print(twoSum([3, 3], target= 6))