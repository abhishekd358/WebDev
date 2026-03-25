
def singleNumber(nums):
    # solve using the hasing 
    hashDict = {}
    for i in nums:
        if i in hashDict:
            hashDict[i] +=1
        else:
            hashDict[i] = 1
    
    # yaha hum : hash mai checck karenge ki bhai . kis KEY ka VALUE 1 hai
    for key, value in hashDict.items():
        if value == 1:  # VALUE 1 hai kya . 
            return key #  haa hai .to uska refresing KEY ko Return kar do.
        

