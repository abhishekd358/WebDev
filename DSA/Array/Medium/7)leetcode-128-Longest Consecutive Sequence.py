# ====================== TIme : n2 and space: (1)
def longestConsecutive(nums):

    longest = 1

    for i in range(len(nums)):
        count = 1 # count to chek consequtive
        start = nums[i]# store the nums[i]

        # ab search karenge kya start ka consequtive hai kya. Linear search kar ke
        j = 0
        conseq = start+1 
        while j < len(nums):
            if nums[j] == conseq:
                count +=1
                conseq +=1
                longest = max(longest, count)
                j = 0
                
            j+=1
        if j == len(nums):
            count = 1
    
    return longest
        
        
# ================================= time : N2 and space : (1)
def longestConsecutive(nums):

    #  case base: where array mai 0 element hai 
    if not nums:
        return 0

    nums.sort()
    # [1, 2, 3, 4, 100, 200]
    # counter 
    count = 1
    longest = 1
    prev = nums[0]
    for i in range(1, len(nums)):
        if nums[i] == prev:
            continue # skip the duplicate . duplicate we not counting 
            
        elif nums[i] == prev+1:
            # consequtive hai
            prev = nums[i]
            count +=1
        elif nums[i] != prev+1:
            prev = nums[i]
            count = 1
        longest = max(longest, count)
        
    return longest   









# ================================== 
def longestConsecutive(nums):
    
    # create a set so lookup only take time complexity : O(1)
    numSet = set(nums)


    longest = 1
    for num in numSet:
        
        





        

















print(longestConsecutive([100,4,200,1,3,2]))


