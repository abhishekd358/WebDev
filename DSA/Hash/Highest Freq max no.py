def mostFreqEle(arr):
    # we use map to link the key => frequesncy
    hashMap = {}
    
    for i in arr:
        if(i in hashMap):
            hashMap[i] +=1
        else:
            hashMap[i] = 1
    
    # we find out the max Frequesncy value frm dictinary(hashMap)
    maxFreq = 0
    for value in hashMap.values():
        if( value >= maxFreq):
            maxFreq = value
       
    print(hashMap)
    print(maxFreq)
    prevKey = 0
    for key in hashMap.keys():
        
        if(hashMap[key]==maxFreq and key > prevKey):
            print(hashMap[key])
            prevKey = key
            # print(prevKey)
            
    return prevKey


print(mostFreqEle([-1, 2, 0, -4, 1, -1, -4, -1]))