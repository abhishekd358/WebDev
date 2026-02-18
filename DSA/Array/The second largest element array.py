# Given an array of positive integers arr[], 
# return the second largest element from the array. 
# If the second largest element doesn't exist then return -1.


num  = [12, 35, 9, 1, 34, 1]

def finalApproach(arr):
    newarr = arr
    sortedArray = []
    less = num[0]

    for i in range(len(newarr)):
        for j in range(len(newarr)):
            if(newarr[j] < newarr[i]):
                if(newarr[j]< less):
                    less = newarr[j]
        print(len(newarr))
        newarr= newarr.remove(less)
    sortedArray.append(less)
        

            

    print(sortedArray)


finalApproach(num)

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