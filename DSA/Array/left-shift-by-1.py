# rotate clockwise 1 elemnt

def leftShitBy1(arr):
    shiftElement = arr[0]
    for i in range(len(arr)-1):
        arr[i] = arr[i+1]
    arr[-1] = shiftElement

    return arr





print(leftShitBy1([1,2,3,4,5]))