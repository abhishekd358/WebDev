def threeSum(nums):
    main = []
    
    for i in range(len(nums)):
        # check for i and j and k
        for j in range(len(nums)):
            for k in range(len(nums)):
                if i!=j and i!=k and j!=k:
                    if nums[i]+nums[j]+nums[k] == 0:
                        x = [nums[k], nums[i], nums[j]]
                        x.sort()
                        if x not in main:
                            main.append(x)


    return main
    #  [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]

print(threeSum([2, -2, 0, 3, -3, 5]))