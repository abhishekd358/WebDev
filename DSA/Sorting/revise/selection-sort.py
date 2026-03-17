def selectionSort(arr):
    for i in range(len(arr)):
        minVal = arr[i]
        minIndex = i
        for j in range(i, len(arr)):
            if(arr[j]< minVal):
                minVal = arr[j]
                minIndex = j
        arr[i], arr[minIndex] = arr[minIndex], arr[i]
        
    return arr


print(selectionSort([13,15,8,9,1]))