

def missingElement(arr):
    temp = set(arr)

    for i in range(len(arr)+1):
        if i not in temp:
            return i







print(missingElement([0, 1, 2, 4, 5, 6]))