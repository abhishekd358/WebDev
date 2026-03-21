#======================== STRIVER =====================
# len(array) = n = 4
# [-1, 2, 3, 14] k = 0
# [2, 3, 14, -1] k = 1
# [3, 14, -1, 2] k = 2
# [14, -1, 2, 3] k = 3
# [-1, 2, 3, 14] k = 4 ------> at this point we get same came to postion
# [2, 3, 14, -1] k = 5 -------> this is equal to k=1

def leftRotateByK(arr, k):
    # ================================================= REVERSE APPROACH ✅
    #==================================================TIME: O(N) SPCAE: O(1)
    def reverse(arr, start, end):

        # we reverese 
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start+=1
            end-=1
            print(arr)
        print(arr)
        print('===========')
        return arr
    
    if k > len(arr):
        k = k%len(arr)
    
    reverse(arr, 0, k-1)
    reverse(arr, k, len(arr)-1)
    reverse(arr, k+1, len(arr)-1)
    reverse(arr, 0, len(arr)-1)
    

    return arr

            










# ======================================================== LOGICAL APPROACH ✅
# ========================================== TIME COMPLEXITY : O(N) SPACE: O(N)

    # this condition not require . it work without it but USING THIS MAKE FASTER WITHOUT MAKING FURTHER OPERATION . IT RETURN AS IT IS ARRAY
    
    # if k % len(arr) ==0:
    #     return arr

    # if k > len(arr):
    #     k = k % len(arr) # it return how many times we have to shift left side

    # # here we create a temporary array
    # temp = [True]*len(arr) 

    # # add the elemtn in temp 
    # for i in range(k, len(arr)):
    #     temp[i-k] = arr[i]

    
    # i = len(arr)-k
    # j = 0
    # while i < len(temp):
    #     temp[i] = arr[j]
    #     i+=1
    #     j+=1
    # return temp




    

print(leftRotateByK([1,2 ,3 ,4 ,5 , 6, 7], k=5))