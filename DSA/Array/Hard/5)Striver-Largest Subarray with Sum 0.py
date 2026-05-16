# ======================== > THIS IS SMAE AS THE Longest sum of subarry with K
def maxLength(self, nums):
    stack = {}
    longest = 0
    sum = 0
    for i in range(len(nums)):
        sum += nums[i]
        
        if sum in stack:
            longest = max(longest,i-stack[(sum)])
        if sum == 0 :
            longest = max(longest, (i+1))
        if sum not in stack:
            stack[sum] = i
    return longest


