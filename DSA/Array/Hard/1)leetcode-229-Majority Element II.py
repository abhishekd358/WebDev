# ========================= time : O(N)

class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        stack = {}
        for num in nums:
            if num in stack:
                stack[num]+=1
            else:
                stack[num] = 1

        result = len(nums)/3
        temp = []
        for key, value in stack.items():
            if value > result:
                temp.append(key)

        return temp