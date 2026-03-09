def findGCD(nums):
    # nums.sort()
    # a = nums[-1]
    # b = nums[0]
    # while b!=0:
    #     (a, b) = (b, a%b)

    # print(a)
    # return a
    arr = []
    i = 1
    
    while i<10:
        if (nums %i == 0):
            arr.append(i)
            if(nums not in arr):
                arr.append(nums)
            nums = nums // i
            print('--------',nums)
            i+=1
        else:
            i+=1
    
    arr.sort()
    
    return arr






print(findGCD(100))