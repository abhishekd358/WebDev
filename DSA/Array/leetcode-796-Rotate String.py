class Solution:
    def rotateString(self, s: str, goal: str) -> bool:

        #  ======================= OPTIMAL : Time → O(n)  Space → O(n)
        # base case
        if len(s) != len(goal):
            return False
        
        # nahi to hum s+s karenege
        doubleStr = s+s
        
        if goal in doubleStr:
            return True
        return False




        # =================================== MY approach: time → O(n2) and Space Complexity → O(n) 


        #this will solve using left shifting method : reference question: left shift element by 1 
        # hum har bar sArr ko left shift karenge ek bar har time
        # fir check karenge kya equal hai GOAL array se 
        # hai tpo True else False
        
        sArr = list(s)
        gArr = list(goal)
        

        leftShiftCounter = 0

        while leftShiftCounter < len(s)+1:
            if sArr == gArr:
                return True
            
            last = sArr[0]
            for i in range(1, len(sArr)):
                #shift katenge
                sArr[i-1] = sArr[i]
                i+=1
            sArr[-1] = last
            leftShiftCounter +=1

        return False
        



        