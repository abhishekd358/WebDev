def recursiveSsort(arr, i):
    # base case 
    # jar ka n haa last parayant -1 compare kela manje all soreted aaahe

    # in simple word : haa i manjhe OUTER LOOP samjh okay
    if(i == len(arr)-1):
        return
    
    small = arr[i]
    indx = i
    j = i+1
    while(j<len(arr)):
        print(j)
        if(arr[j]< small):
            small = arr[j]
            indx =j 
        j+=1
    # when we get samll we swap
    arr[i], arr[indx] = small, arr[i]
    print(arr)

    return recursiveSsort(arr, i+1)



print(recursiveSsort([13, 15, 9, 8, 3], 0))



