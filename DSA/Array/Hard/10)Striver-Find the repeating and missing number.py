class Solution:

    def findTwoElement(self, nums):

        # set duplicate remove kar deta hai
        setNums = set(nums)

        # unique values ka sum
        setNumsSum = sum(setNums)

        # original array ka sum
        currSum = sum(nums)

        # duplicate value 2 baar count hua hoga
        # isliye difference = repeating number
        RepeatNumber = currSum - setNumsSum

        # total elements
        n = len(nums)

        # 1 se n tak ka expected sum
        actualSum = (n * (n + 1)) / 2

        # expected sum - unique sum
        # => missing number
        missingNumber = round(actualSum - setNumsSum)

        # [repeating, missing]
        return [RepeatNumber, missingNumber]



# Example:

# nums = [1,2,2,4]

# setNums     = {1,2,4}
# setNumsSum  = 7
# currSum     = 9

# repeating   = 9 - 7 = 2

# actualSum   = 10
# missing     = 10 - 7 = 3

# Output:
# [2,3]