def maxSubArray(nums):

    maxSum = float('-inf')
    currSum = 0

    #  kuch pointer rakenge 
    start = 0
    tempStart = 0
    end = 0

    for i in range(len(nums)):
        # sum calculate karenge
        currSum += nums[i]

        # maximum set karenge
        if currSum > maxSum:
            maxSum = currSum
            # jab maximum hai means our subArr start 
            start = tempStart
            end = i

        # if currSum negative hai
        if currSum < 0:
            currSum = 0
            # to hume subArray ke start ko reset karenge
            tempStart = i+1

    print("Subarray:", nums[start:end+1])
    return maxSum


print(maxSubArray([2, 3, 5, -2, 7, -4]))
