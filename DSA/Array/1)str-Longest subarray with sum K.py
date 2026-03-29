#  work for zero, negative , positives Numbers.

# TIme complexituy : O(n) and Space : O(n)

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



# print(longestSubarray( [2, 0, 0, 3], k=3))




# MULTIPLE TEST CASAES

tests = [
    ([1,2,3,4,5], 9),
    ([1,2,3], 6),
    ([1,2,3], 10),
    ([0,0,0,0], 0),
    ([1,0,2,0,3], 3),
    ([10,5,2,7,1,-10], 15),
    ([-1,-2,-3,-4], -6),
    ([3,-1,-1,2,5], 5),
    ([1,2,1,1,1], 3),
    ([5,1,2], 5),
    ([2,0,0,3], 3),
    ([5,-1,2], 5),
    ([1,2,3,7], 7),
    ([1,-1,1,-1,1,-1], 0),
    ([4,-2,-2,2,2], 2)
]

for arr, k in tests:
    print(arr, "k=", k, "->", longestSubarray(arr, k))
