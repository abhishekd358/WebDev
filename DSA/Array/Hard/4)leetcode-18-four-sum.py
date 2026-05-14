def fourSum(nums, target):
    nums.sort()
    # set banayaenge ans ke liye
    ans = []
    
    for i in range(len(nums)):
        # we skip duplicate of i 
        if i > 0 and nums[i] == nums[i-1]:
            continue
        for j in range(i+1, len(nums)):
            # we skip duplicate of i 
            if j > i+1 and nums[j] == nums[j-1]:
                continue
        
            k = j+1
            l = len(nums)-1
            while k < l:
                sum =(nums[i]+nums[j]+nums[k]+nums[l])
                # chek the sum target hai 
                if sum == target:
                    ans.append([nums[i], nums[j], nums[k], nums[l]])
                    k+=1
                    l-=1
                    # skip k and l duplicate
                    while k < l and nums[k] == nums[k-1]:
                        k+=1
                    while k < l and nums[l] == nums[l+1]:
                        l-=1
                
                # elif sum
                elif sum < target:
                    k+=1
                else:
                    l-=1
                    
    return ans


print(fourSum([1,0,-1,0,-2,2], target=0))
print(fourSum([2,2,2,2,2], target=8))