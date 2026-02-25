def moveZeroes(nums):
    i = 0
    while(i<len(nums)):
        print("i",i)
        j= 0
        while(j<len(nums)):
            print("j--->",j)
            if(nums[j] == 0):
                nums[-1] ==
                nums.pop(j)
            j+=1
        i+=1



    return nums


    # arr = []
    # count = 0

    # for i in range(len(nums)):
    #     if(nums[i]==0):
    #         count +=1
    #     else:
    #         arr.append(nums[i])
    # arr.extend([0]*count)

    # return arr


print(moveZeroes([0,1,0,3,12]))


