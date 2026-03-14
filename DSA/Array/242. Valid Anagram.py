
def isAnagram( s, t):
    # bhai length same nahi means nt anagram
    if( len(s) != len(t)):
        return False
    # s ka ek array banayenge
    hashS = {}
    hashT = {}
    for i in range(len(s)):
        if(s[i] not in hashS):
            hashS[s[i]] = 1
        else:
            hashS[s[i]] +=1 

    for i in range(len(t)):
        if(t[i] not in hashT):
            hashT[t[i]] = 1
        else:
            hashT[t[i]] +=1

    print(hashS, hashT)
    # chekcing the smae or nt the occuerence of key 
    for key, value in hashS.items():
        if(key not in hashT):
            return False
        elif hashS[key] != hashT[key]:
            return False
            
    return True

        
        
            
print(isAnagram(s = "car", t = "rat"))


        

# def addTwoNumbers(l1, l2):
#     # ================================= MY LOGIC 
#     l1Num = ''.join(map(str, l1))
#     l2Num = ''.join(map(str, l2))
#     print(l1Num, l2Num)

#     revl1 = l1Num[::-1]
#     revl2 = l2Num[::-1]

#     totalSum = int(revl1)+ int(revl2)
#     sum = totalSum
#     result = []
#     if totalSum == 0:
#         return [0]
#     while(sum > 0):
#         lastDigit = sum % 10
#         result.append(lastDigit)
#         sum = sum // 10
#     return(result)
    
            

# print(addTwoNumbers(l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9])      )
