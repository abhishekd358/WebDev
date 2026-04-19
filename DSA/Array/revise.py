# ========================== Largest Element 
# ========================== Second Largest Element 

# def secondLargest(arr):
#     maxVal = arr[0]
#     secondMax = -1

#     for num in arr:
#         if  secondMax < num > maxVal:
#             secondMax = maxVal
#             maxVal= num
#         elif secondMax < num< maxVal:
#             secondMax = num
#     return secondMax
             

# print(secondLargest([8, 8, 7, 6, 5]))


# ============================ 


# def minMirrorPairDistance(nums):
        
#     minVal= 1
#     count = 0 # to check is minVal update or not . if not update we return -1 
#     for i in range(len(nums)):
#         revNum = int((str(nums[i]))[::-1])
#         print(revNum)
#         for j in range(i+1, len(nums)):
#             if (nums[j] == revNum):
#                 print("jjjj",j)
#                 count+=1
#                 newVal = j - i
#                 print("newVl", newVal)
#                 if newVal > 0 :
#                     minVal = newVal
#     if count == 0:
#         return -1
#     else:
#         return minVal
# print(minMirrorPairDistance([4, 8, 4]))
    


# # =================================== 
# def rotate(arr, k):
#     temp = []
#     for i in range(len(arr)-k, len(arr)):
#         temp.append(arr[i])
#     for j in range(k+1):
#         temp.append(arr[j])
#     print(temp)
#     print(arr)

#     arr = temp
#     return arr
        

# print(rotate([1,2,3,4,5,6,7], k=3))




def rotate(arr, k):
    i=0
    while i < k:
        last = arr[-1]
        j = len(arr)-2
        while j >= 0:
            arr[j+1] = arr[j]
            j-=1
        i+=1
        arr[0] = last
    return arr
print(rotate([1,2,3,4,5,6,7] , k =54994))