def quickSort(arr, low, high):

    def partition(arr, low, high):
        i = low
        j = high
        pivot =arr[low]
        while (i< j):
            while( i<=high and arr[i]<= pivot ):
                i+=1
            
            while (j>=low and arr[j] > pivot):
                j-=1
            if( i< j):
                # swap 
                arr[j], arr[i] = arr[i], arr[j]
        # now we put at right index
        arr[j], arr[low] = arr[low], arr[j]
        return j
            
    if(low < high):
        # recursive call karenege
        j = partition(arr, low, high)
        quickSort(arr, low, j-1)
        quickSort(arr, j+1, high)
    return arr

                



print(quickSort([13, 15, 9, 8 ,1], low = 0 , high= 4))