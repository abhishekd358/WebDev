def moveZeroes(arr):
    # =========================== BEST AAPROACH ✅
    i = 0
    for j in range(len(arr)):
        if arr[j] != 0:
            arr[i], arr[j] = arr[j], arr[i]
            i+=1
    return arr




    #    ========================================= MY LOGIC
    # n = len(nums)
    # if(n <= 1):
    #     return nums
    # temp = []
    # countZero = 0
    # for i in range(n):
    #     if( nums[i] ==0 ):
    #         countZero +=1
    #     else:
    #         temp.append(nums[i])
        
    # for i in range(countZero):
    #     temp.append(0)
    
    # nums[:] = temp
    # return nums


print(moveZeroes([4,2,4,0,0,3,0,5,1,0]))


