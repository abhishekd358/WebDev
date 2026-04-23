def setZeroes(nums):
    col = []
    row = []
    for i in range(len(nums)):
        for j in range(len(nums[i])):
            if nums[i][j] == 0:
                row.append(j)
                col.append(i)
    
    for i in range(len(nums)):
        for j in range(len(nums[i])):
            if j =:
                row.append(j)
                col.append(i)
    


print(setZeroes( [[1,1,1],[1,0,1],[1,1,1]]))