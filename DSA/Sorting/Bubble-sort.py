def bubbleSort(arr):
    for i in range(len(arr)):
        # we check the Swap happen or not . if Swap not happens means array is sorted . then instead of going all chek we break and print

        isSwap = 0

        for j in range((len(arr)-(i+1))):
            if(arr[j] > arr[j+1]):
                # we swap adjacent
                arr[j], arr[j+1] = arr[j+1], arr[j]
                # if swap haapend increment
                isSwap += 1

        if(isSwap == 0):
            break
        
    print(arr)


bubbleSort([7, 4, 1, 5,3])




