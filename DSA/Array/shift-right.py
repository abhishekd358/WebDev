

def shiftRight(arr):
    # ======================================= OWN LOGIC ✅
    if len(arr) == 2:
        arr[0], arr[1] = arr[1], arr[0]
        return arr
    if len(arr) == 1:
        return arr

    record = arr[1]
    arr[1] = arr[0]
    for i in range(2, len(arr)):
        temp = arr[i]
        arr[i] = record
        record =temp
    arr[0] = record
    print(arr)


print(shiftRight([1,2,3,4,5]))