#  ====================== APPROACH : Optimal :  Time Complexity O(n) , Space Complexity O(n)
def rearrangeArray1(nums):
    ans = [0] * len(nums)

    pos_indx = 0
    neg_indx = 1

    # ek loop start karenge 
    for i in range(len(nums)):
        if nums[i] > 0: # postitve number hai kya
            ans[pos_indx] = nums[i] # to place kr denge
            pos_indx += 2    # 2 ke interval chalega : 0 , 2 ,4, 6
               
        else: # Negative Number hai 
            ans[neg_indx] = nums[i]  
            neg_indx += 2    # 2 ke interval chalega : 1 , 3 ,5, 7
    return ans

print("OPTIMAL SOlution:")
print(rearrangeArray1([3,1,-2,-5,2,-4]))



#  ==================== APPROACH 1 : Time Complexity O(n) , Space Complexity O(n)

def rearrangeArray1(nums):
    neg = []
    pos = []
    for num in nums:
        if num < 0:
            neg.append(num)
        else:
            pos.append(num)
        
    pos_inc = 0
    neg_inc = 0
    for i in range(len(nums)):
        if i % 2 == 0: # even 
            nums[i] = pos[pos_inc]
            pos_inc += 1
               
        if i % 2 != 0:
            nums[i] = neg[neg_inc]
            neg_inc+=1
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








#  ============================== BRUTH FORCE : 
class Solution:
    def rearrangeArray(self, nums):

        for i in range(len(nums)):

            if i % 2 == 0: # positive
                if nums[i] < 0:
                    # next postive ko lenge us se swap krenge
                    for j in range(i, len(nums)):
                        if nums[j] > 0:
                            nums[i], nums[j]  = nums[j], nums[i]
                            break
            
            # odd
            if i % 2 != 0:
                if nums[i] > 0:
                    # next neagtive ko lenge or us se swap karenge
                    for j in range(i, len(nums)):
                        if nums[j] < 0:
                            nums[i], nums[j]  = nums[j], nums[i]
                            break
        
        return nums