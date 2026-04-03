# # 2840. Check if Strings Can be Made Equal With Operations II


# def checkStrings(s1, s2):

    




# #  =========================== HIGHER TIME COMPLEITY n2 🔴
#     # a1 = list(s1)
#     # a2 = list(s2)
#     # i = 0
#     # while i < (len(s1)-1):
#     #     if a1 == a2:
#     #         i+1
#     #         continue
#     #     found = False
#     #     j = i+1
#     #     while j < (len(s1)):
#     #         if a1[j] == a2[i] and abs(j-i) % 2 == 0:
#     #             a1[i], a1[j] = a1[j], a1[i]
#     #             found = True
#     #         j+=1
#     #     if not found:
#     #         return False
#     #     i+=1
#     # return True


    
                
# print(checkStrings(s1 = "a", s2 = "a"))


s1 = "abcdba"
s2 = "cabdab"

print(Counter(s1[1::2]) == (s2[1::2]))






        