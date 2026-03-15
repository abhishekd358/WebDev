def mergeSort(arr, low, high):
    
    # base case
    if(low == high):
        return
    mid = (low+high) // 2 


    #============ Merge Defination
    def merge(arr, low, mid, high):
        # left array  ke liye
        left = low
        # right array ke liye 
        right = mid+1

        # yaha ek sorted Array we create 
        sortedTemp = []

        while(left<=mid and right<= high):
            if(arr[left] < arr[right]):
                sortedTemp.append(arr[left])
                left+=1
            else:
                sortedTemp.append(arr[right])
                right +=1
        
        # now we have to push remaining element either from left array or right array to the TEMP arry
        while(left<=mid):
            sortedTemp.append(arr[left])
            left+=1
        while(right<=high):
            sortedTemp.append(arr[right])
            right +=1
        # print('======================================>', sortedTemp)
        for i in range(low, high+1):
            arr[i] = sortedTemp[i-low]
        
        return arr

    # we divide the array in 2 part and then further we divide again
    mergeSort(arr, low, mid)   
    mergeSort(arr, mid+1, high)
    # when we divide we merge array in asecneding order
    merge(arr, low, mid, high)
    return arr





print(mergeSort(arr=[13, 15, 9, 8, 1], low=0, high=4))