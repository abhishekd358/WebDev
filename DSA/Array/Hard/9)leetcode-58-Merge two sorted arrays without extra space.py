class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:

        left= m-1    # nums1 last index
        right = n-1  #----> nums2 last index
        k = (m+n) -1 # ----->>>> nums1 last index
        
        while right >= 0 and left >= 0:
            # check nums1 ka bigger hai kya
            if nums1[left] > nums2[right]:
                nums1[k] = nums1[left] # large element goes at K postion last postion 
                left-=1
            else:
                nums1[k] = nums2[right]
                right -=1
            k-=1
        

        # now we put left over remaining nums2 elements
        while right >= 0:
            nums1[k] = nums2[right]
            right-=1
            k-=1
        

        return nums1

