def findMissingElements(nums):
    # first max and min find karenge
    max = nums[0]
    min = nums[0]
    
    for i in range(1, len(nums)):
        if(nums[i] > max ):
            max = nums[i]
        elif nums[i] < min:
            min = nums[i]
    nonPresentElementINArr = []
    print('min', min, 'max',max)
    for i in range(min, max+1):
        print(i)
        if( i not in nums):
            nonPresentElementINArr.append(i)
            
    return nonPresentElementINArr

print(findMissingElements([1,6,3]))