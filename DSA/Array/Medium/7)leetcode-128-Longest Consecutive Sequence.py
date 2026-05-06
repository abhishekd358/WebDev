# ====================== TIme : n2 and space: (1)
def longestConsecutive1(nums):

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
def longestConsecutive2(nums):

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










# ==================================  O(N) O(1)
def longestConsecutive3(nums):

    # base case
    if not nums:
        return 0
    
    # create a set so lookup only take time complexity : O(1)
    numSet = set(nums)


    longest = 1
    # hum each element ke liye loop chalyenge or uske sabhi conswqutive ko check karenge
    for num in numSet:
        
        if num-1 not in numSet: # check ki current num ka PREVIOUS CONSEQUTIVE HAI ya NHI
            # if nahi hai to hum currentNUM se start karenge
            count =1
            start = num

            # ab loop chalyenge or sab consequtive ko check karegene
            while start + 1 in numSet:
                count +=1
                start+= 1
            
            # sab consequtive count mile ke baad 
            longest = max(longest, count)
    return longest

            
        
print(longestConsecutive1([101, 4, 200, 100, 1, 2,4 ,4 , 3, 1,]))

print(longestConsecutive2([101, 4, 200, 100, 1, 2,4 ,4 , 3, 1]))
print(longestConsecutive3([101, 4, 200, 100, 1, 2,4 ,4 , 3, 1]))
        
        






