def reverseNumber(n):

    # COMPLEXITY : O(n)

    #divide by base10 to make number shorter by one digit and then multiply with base10 that previous Number and add current last digit

    reverseNum = 0
    while(n>0): # run nuntil over number is greater than 0
        lastDigit = n % 10 
        reverseNum = reverseNum * 10 + lastDigit
        n = n//10   
    return reverseNum



# ======================= approach 2    COMPLEXITY : O(n2)
    '''
    reverseNum =''
   
    i = 0
    while(n>0): # run nuntil over number is greater than 0
        reverseNum += str(n % 10) # first we taking reminder that 8(i=0), 4(i=1),2(i=2),1(i=3)
        n = n//10   # we making number smaller by 124(i=0), 12(i=1), 12(i=2), 1(i=3) {0(i=4)}-> here we break
        i+=1
    return int(reverseNum)
    '''



# ========================= BAD APPROACH : Complexity:O(n2) 

    # for i in range(len(str(n))-1,-1,-1):
        
    #     reverseNum += str(n)[i]
     
    # return int(reverseNum)

    



print(reverseNumber(1248))