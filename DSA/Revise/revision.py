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

# def primeNum(num):

#     prime = [True] * num

#     #  becuase 0 and 1 not prime
#     prime[0] = prime[1]= False

#     for i in range(2, num):
#         if prime[i]: 
#             # prime hai currnet value to us ke sabhi multiple ko false
#             for j in range(i*i, num, i):
#                 prime[j] = False
  
#     return sum(prime)


# print(primeNum(50))



# ==================================== Selection Sort
# def selectionSort(arr):
#     for i in range(len(arr)):
#         minVal = arr[i]
#         minIdx = i
#         for j in range(i, len(arr)):
#             if arr[j] < minVal:
#                 minVal =  arr[j]
#                 minIdx = j
#         arr[i] , arr[minIdx]= arr[minIdx], arr[i]
#         print(arr)
    

#     return arr



# print(selectionSort([7, 4, 1, 5, 3]))




# ================================ INSERTION SORT

# def insertionSort(arr):
    
#     for i in range(1, len(arr)):
#         j = i-1
#         currVal = arr[i]
#         while j >=0 and currVal < arr[j]:
#             arr[j+1] = arr[j]
#             j-=1
#         arr[j+1] = currVal
#     return arr
            

# print(insertionSort([7, 4, 1, 5, 3]))



# def mergeSort(arr, low, high):
#     # ======== DIVIDE karenge
#     # Base case
#     if low == high:
#         return 
#     mid = (low+ high) // 2


#     # ========= MERGE karenge
#     def merge(arr, low, mid ,high):
#         left = low
#         right = mid+1

#         # temp arr  
#         temp = []

#         # now we sort the each divide or half of array
#         while left <= mid and right <= high:
#             # check karegne
#             if arr[left] < arr[right]:
#                 temp.append(arr[left])
#                 left+=1
#             else:
#                 # right wala chota hai 
#                 temp.append(arr[right])
#                 right +=1

#         # ab kuch element kisi bhi ek array mai reamin honge us ko copy kar denge
#         while left<= mid:
#             temp.append(arr[left])
#             left+=1
#         while right<=high:
#             temp.append(arr[right])
#             right+=1

#         #  now we get complete the temp array sorted 
#         for i in range(low , high+1):
#             arr[i] = temp[i-low]

#         return arr


# # =============== Recurisoion calls
#     # first half
#     mergeSort(arr, low, mid)
#     # second half
#     mergeSort(arr, mid+1, high)

#     # both get merge
#     merge(arr, low, mid, high)
#     return arr




# print(mergeSort([7, 4, 1, 5, 3], low=0, high=4))






# ========================= discout calculate
# import math
# amount = int(input())

# if amount < 1000:
#     print(f'{(amount * 5) / 100:.2f}')
    
# elif (1000 <= amount< 5000):
#     print(f'{(amount * 10) / 100:.2f}')

# else:
#     print(f'{(amount * 15) / 100:.2f}')


# n = int(input())
# arr = list(map(int, input().split()))
# maxSum = int(input())


# prevSum = 0
# for i in range(len(arr)):
#     currSum = 0
#     for j in range(i, len(arr)):
#         currSum+= arr[j]
#         if currSum <= maxSum:
#             prevSum = max(prevSum , currSum)
# print(prevSum)


# ====================== DP prblem 
# def countWays(N, R, end):

#     # step 1 (only one element → must be 1)
#     if end == 1:
#         same = 1
#         diff = 0
#     else:
#         same = 0
#         diff = 1   # [1] ends witnot-endh 

#     # build for length 2 → N
#     for i in range(2, N+1):

#         new_same = diff   # only way to reach 'end'

#         new_diff = same*(R-1) + diff*(R-2)

#         same = new_same
#         diff = new_diff

#     return same


# print(countWays(4,4,3))  # 7
# print(countWays(3,3,2))  # 2

# ===========================================================
#  taking input 

N = int(input().strip())

temp = []

for i in range(N):
    a , b = map(int, input.split())
    temp.append([a, b])



# output 
for a, b in temp:
    print(a, b)
