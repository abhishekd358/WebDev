class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        # ans array declare
        ans = []

        # recursion
        def backtrack(idx):
            # base case
            if idx == len(nums):
                ans.append(nums[:]) # hum current permuatation ko copy kar denge 
                # becuase we reach at base of 1 tree branch
                return 
            
            # elese hum loop chalenege current Idx se lst tak
            for i in range(idx, len(nums)):
                # swap karenge
                nums[idx], nums[i] = nums[i], nums[idx]

                # fir se hum next indx se fir ek branch banyenege 
                # next index swap ke liye for pattern 
                backtrack(idx+1)

                # fir se array ko original form mai layenege
                nums[idx], nums[i] = nums[i], nums[idx]

        backtrack(0)
        return ans
        