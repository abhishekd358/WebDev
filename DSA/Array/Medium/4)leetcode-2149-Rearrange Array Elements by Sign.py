#  ==================== APPROACH 1 : Time Complexity O(n) , Space Complexity O(n)

def rearrangeArray1(nums):
    neg = []
    pos = []
    for num in nums:
        if num < 0:
            neg.append(num)
        else:
            pos.append(num)
        
    inc = 0
    for i in range(len(nums)):
        if i % 2 == 0: # even 
            nums[i] = pos[inc]
               
        if i % 2 != 0:
            nums[i] = neg[inc]
            inc+=1
    return nums

print("approach 1:")
print(rearrangeArray1([3,1,-2,-5,2,-4]))




# =========================== APPROACH 2 : using DEQUE : Time Complexity O(n) , Space Complexity O(n)
from collections import deque
def rearrangeArray2(nums):
    neg = deque([])
    pos = deque([])
    for i in range(len(nums)):
        if nums[i] < 0:
            neg.append(nums[i])
        else:
            pos.append(nums[i])
    for i in range(len(nums)):
        if i % 2 == 0:
            nums[i] = pos[0]
            pos.popleft()
        
        else:
            nums[i]= neg[0]
            neg.popleft()
    return nums

print("approach 2:")
print(rearrangeArray2([3,1,-2,-5,2,-4]))