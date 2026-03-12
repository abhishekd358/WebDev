
def isAnagram(s: str, t: str):
    sArr = list(s)
    tArr = list(t)

    if(len(sArr) != len(tArr)):
        return False   
    
    # loop chalega on arr which has max element
    for i in range(len(sArr)):
        if(sArr[i] not in tArr):
            return False
        else:
            tArr.remove(sArr[i])
        
    return True


print(isAnagram("bbcc", "ccbc"))