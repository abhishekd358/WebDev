# Given an array of positive integers arr[], 
# return the second largest element from the array. 
# If the second largest element doesn't exist then return -1.


# ========================================== RIGHT APPROACH ✅
def getSecondLargest(arr):
    largest = arr[0]
    second = -1
    
    for i in range(1, len(arr)):
        if arr[i] > largest:
            second = largest
            largest = arr[i]
            
        elif arr[i] < largest and arr[i] > second:
            second = arr[i]
    return second
        
num  = [12, 35, 9, 1, 34, 1]
num1 = [10, 10, 10]
num2 = [10, 5, 10]
num3 = [13, 15, 4, 1]


print(getSecondLargest(num))
print(getSecondLargest(num1))
print(getSecondLargest(num2))
print(getSecondLargest(num3))
                

# def getSecondLargest(arr):
#     largest = []
#     for i in range(len(arr)-1):
#         if(arr[i]> arr[i+1]):
#             largest.append(arr[i])
#         else:
#             largest.append(arr[i+1])
#     print('Approach1:--->', largest)

# getSecondLargest(num)



# def approachSecond(arr):
#     largest = 0
#     largestArray = []
#     for i in range(len(arr)):
#         if(arr[i]> largest):
#             largestArray.append(arr[i])
#             largest = arr[i]

    
#     print('secondApproach:-->', largestArray)

# approachSecond(num)





# print(1< 1)