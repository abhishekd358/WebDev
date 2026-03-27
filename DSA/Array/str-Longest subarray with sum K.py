def longestSubarray( arr, k):
    # logest element that create K sum
    longest = 0
    # sum 
    currentSum = 0

    # stack  create karenge . DIctornary . jsime hum current SUM save karenge or index
    stack_dic = { }

    for i in range(len(arr)):
        # calculate sum 
        currentSum = currentSum + arr[i]

        # suppose SUM mera == K hai to LONGEST ko update karo  
        if currentSum == k:
            longest = max(longest, i+1)     # currentLongest or prevLongest se konsa bada hai          
    
        # if stack ke ander hai VALUE . to hum (uska index - current index) karenge . or prevLongest and currentLongest se MAXimum value update karenge
        elif (currentSum - k) in stack_dic:
            longest = max(longest, i - stack_dic[currentSum-k])

        # if stack ke ander currentSum nahi to save karenge sum ko or index ko.
        if(currentSum not in stack_dic):
            stack_dic[currentSum] = i 
            

        
    return longest



print(longestSubarray( [10, 5, 2, 7, 1, -10], k=15))
