def insertionSort(arr):
    for i in range(1, len(arr)):
        j = i-1
        print(j)
        currenVal = arr[i]
        while( j>=0 and arr[j] > currenVal):
            # swap : jo bada hai usko right swap kar do
            # if condition fails: means already element sort . then hum next element i par jayenge
            arr[j+1] = arr[j]
            j-=1

        arr[j+1] = currenVal
    return arr




print(insertionSort([13, 15, 9, 8, 1]))