
def maxDistance(nums1, nums2):
    
    left = 0
    maxDist = 0
    # maera left array ke liye loop:
    # har left wale ki pair check karnege:
    while left < len(nums1):
        # right array ka loop 
        right = left
        while right < len(nums2):
            # condition1 : if nums1 < nums2 se 
                # to uski sabi pari nikalo jab tak nums1 > nums2 na ho 
            if nums1[left] <= nums2[right]:
                # max distance calculate karenge
                maxDist = max(right - left, maxDist)
            # if nums1 greater hai to sidha: outer loof LEFT next index se chalgega
            elif nums1[left] > nums2[right]:
                break
            
            right+=1
            
        left+=1
            
            
    return maxDist


print(maxDistance(nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]))