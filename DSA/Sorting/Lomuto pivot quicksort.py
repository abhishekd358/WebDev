# =========================== pivot is last element

def quickSort(arr, low, high):

    # partion
    def partition(arr, low, high):
        i = low
        j = high-1

        pivot = arr[high]

        # now we have to loop through aand place the pivot at rgiht postion
        while True:

            # inner loop
            while i <= high-1 and arr[i] <= pivot:
                i+=1
            
            while j >= low and arr[j] > pivot :
                j-=1

            if i < j:
                # else above both condtion fail,  we swap the elements
                arr[i], arr[j] = arr[j], arr[i]
            
        # now we pivot ko correct potion par rakhenge
        arr[i], arr[high] =  arr[high], arr[i]

        return i

    if low < high:
        mid_val = partition(arr, low, high)
        quickSort(arr, low, mid_val-1)
        quickSort(arr, mid_val+1, high)
    return arr
        



print(quickSort([13,15,9,8,1], low=0, high=4))












# def mergeSort(arr, low, high):
#     # base case for division
#     if low == high:
#         return

#     # mid ko calculate karenge
#     mid = (low + high) // 2

#     def merge(arr, low, mid, high):

#         # pinter declartaion 
#         left = low
#         right = mid+1 

#         temp = []

#         while left <= mid and right<= high:

#             # first copy the left 
#             if arr[left] < arr[right]:
#                 temp.append(arr[left])
#                 left+=1
#             else:
#                 temp.append(arr[right])
#                 right +=1

        
#         # now reamining copy
#         while left <= mid:
#             temp.append(arr[left])
#             left+=1
#         while right <= high:
#             temp.append(arr[right])
#             right +=1
        

#         # now we copyting the tmep into orignial array
#         for i in range(low, high+1):
#             arr[i] = temp[i-low]

#         return arr







#     mergeSort(arr, low, mid)
#     mergeSort(arr, mid+1, high)
#     merge(arr, low, mid, high)
#     return arr


# print(mergeSort([13,15,9,18,1], low=0, high=4))


