# def reverseNum(num):
#     rev = 0
#     while num != 0:
#         last_digit = num % 10
#         rev = rev * 10 + last_digit
#         num = num // 10
#     return rev


# print(reverseNum(12345))



# ==================== Plindrome number easy so skip 


#  ===================== GCD of 2 no. 

# def gcdNum(a, b):

#     while b != 0:
#         a,b = b, a % b
#     return a


# print(gcdNum(24, 36))


# ===================== Armnogstorng no

# def armstrong(num):

#     power = len(num)
#     sum = 0
#     for char in num:
#         sum += int(char) ** power
#     return num == str(sum)


# print(armstrong(str(153)))





#  ================= prime numbers :

def primeNum(num):

    prime = [True] * num

    #  becuase 0 and 1 not prime
    prime[0] = prime[1]= False

    for i in range(2, num):
        if prime[i]: 
            # prime hai currnet value to us ke sabhi multiple ko false
            for j in range(i*i, num, i):
                prime[j] = False
  
    return sum(prime)




        







print(primeNum(50))