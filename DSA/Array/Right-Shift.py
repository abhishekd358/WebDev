def rightShift(arr, k):
    i = 0
    j = i+1
    curr = arr[j]
    print(curr)


    while i< k and j < len(arr)-1:
        arr[j] = curr
        j+=1
        curr= arr[j]
        print(arr)
        print('==========')
    return arr

print(rightShift([1,2,3,4,5,6,7], k=2))

        