def findEvenOccurrences(arr):
    hash = {}
    result = []
    for i in range(len(arr)):
        if(arr[i] not in hash):
            hash[arr[i]] = 1
        else:
            hash[arr[i]] += 1
            
    for key, value in hash.items():
        if(value % 2 == 0 ):
            result.append(key)
    
    if(len(result)==0):
        return [-1]
    
    print(result)

findEvenOccurrences([9, 12, 23, 10, 12, 12, 15, 23, 14, 12, 15])