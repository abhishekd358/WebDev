def bubbleSort(arr):
    for i in range(len(arr)):
        isSwap = 0
        for j in range(len(arr)-(i+1)):
            if(arr[j] > arr[j+1]):
                arr[j+1], arr[j]  = arr[j], arr[j+1]
                isSwap +=1
        if(isSwap == 0):
            return arr
        
    return arr


print(bubbleSort([13,15,8,9,1]))
