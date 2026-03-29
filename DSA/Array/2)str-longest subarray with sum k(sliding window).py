#========================= SLIDING WINDOW APPROACH 
#  not work for Neagative , Zeros 
#  ONLY FOR POSITIVE NUMBERS

# TIme complexituy : O(n) and Space : O(1)

def longestSubarray( arr, k):
    i = 0
    j = 0
    sum = 0
    longest = 0

    # ab yaha ek loop chalega jab tak hamaara j < len(arr)
    while j < len(arr):
        # calcualte sum first
        sum += arr[j]

        # phele sum check karenge . Kya greater hai . TO SHRINK KARENGE
        while i <= j and sum > k:
            sum = sum - arr[i]
            i+=1

        # dekhenge kya sum K hai 
        if sum ==  k:
            # longest ko hum store karenge
            longest = max(longest, j-i + 1)


        j+=1
        
    return longest






print(longestSubarray([1, 2, 3, 7], k=7))
