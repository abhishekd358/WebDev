def reverse(arr):
    min = 0
    max = len(arr)-1
    print(min, '----', max)
    while(min <= max):
        temp = arr[max]
        arr[max] = arr[min]
        arr[min] = temp
        min +=1
        max = max-1

    return arr

print(reverse([1,2,1,1,5,1]))