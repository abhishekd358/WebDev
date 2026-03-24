
def unionArray(nums1, nums2):
    temp = []

    left = 0
    right = 0

    while left < len(nums1) and right < len(nums2):
        print('left',left, '-', nums1[left],'====',' right', right,'-',nums2[right])

        if nums1[left] < nums2[right]:
            print("nums1 ka appedn",nums1[left])
            if len(temp) == 0 or temp[-1] != nums1[left]:
                temp.append(nums1[left])
            left+=1
        else:
            print("nums2 ",nums2[right])
            if len(temp) == 0 or temp[-1] != nums2[right]:
                temp.append(nums2[right])
            right+=1
        

    # reamining copy
    
    while  left < len(nums1):
        if temp[-1] != nums1[left]:
           temp.append(nums1[left])
        left+=1

    while  right < len(nums2):
        if temp[-1] != nums2[right]:
            temp.append(nums2[right])
        right+=1
        
    return temp
        
            
    
    


print(unionArray([2,2,4,6,6,8], [4,4,6]))

