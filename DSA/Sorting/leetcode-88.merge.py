
def merge(nums1, m, nums2, n):
    """
    :type nums1: List[int]
    :type m: int
    :type nums2: List[int]
    :type n: int
    :rtype: None Do not return anything, modify nums1 in-place instead.
    """


    tempArr = []
    left = 0
    right = 0
    # num1 sorting
    while(left < m and right< n):
        if(nums1[left] < nums2[right]):
            tempArr.append(nums1[left])
            left+=1
        else:
            # nums 2 ka value Small hai
            tempArr.append(nums2[right])
            right +=1
    # now kisi array me leftover element honge
    while(left< m):
        tempArr.append(nums1[left])
        left+=1
    while(right<n):
        tempArr.append(nums2[right])
        right +=1
    # now we have TEMP array is sorted we overwirte to original one
    if(len(nums1) > len(nums1)):
        nums1 = tempArr
        return nums1
    else:
        nums2 = tempArr
        return nums2
    
        

print(merge([1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))