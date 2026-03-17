'''
Second Largest 
Difficulty: EasyAccuracy: 26.72%Submissions: 1.5MPoints: 2Average Time: 15m
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.


Note: The second largest element should not be equal to the largest element.

'''

def getSecondLargest(arr):
        
    Lar = arr[0]
    i = 0
    while i < (len(arr)):
        if (arr[i] > Lar):
            Lar = arr[i]
        i+=1
    # yaha diff calculate
    j = 0
    diff = Lar
    indx = 0
    count = 0
    while j < len(arr):
        respDiff= Lar - arr[j]
        if (0 < respDiff < diff):
            diff = Lar - arr[j]
            indx = j
            count+=1
        j+=1
    if(count == 0):
        return -1
    return arr[indx]
print(getSecondLargest([10, 10, 10]))
