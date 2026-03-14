def recursiveSsort(arr, i):
    # base case 
    # jar ka n haa last parayant -1 compare kela manje all soreted aaahe

    # in simple word : haa i manjhe OUTER LOOP samjh okay
    if(i == len(arr)-1):
        return

    min = arr[i]
    indx  = i
    for j in range(i+1, len(arr)):
        if(arr[j] < min):
            # choota hai to min update kar denge . or uska index record kar lenge
            min = arr[j]
            indx = j
    # minimum mil gaya to swap kar denge
    arr[i], arr[indx] = min, arr[i] 

    print(arr)
    return recursiveSsort(arr, i+1)
    # return arr



print(recursiveSsort([13, 15, 9, 8, 3], 0))



