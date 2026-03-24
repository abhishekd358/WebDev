

def missingElement(arr):
    temp = set(arr)
    for i in range(1, len(arr)+2):
        print("i",i)
        if i not in temp:
            return i







print(missingElement([1]))