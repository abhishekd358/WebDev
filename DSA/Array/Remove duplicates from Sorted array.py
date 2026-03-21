
def removeDuplicates(nums):
    
    
    i = 0
    j = 1
    
    # j maza last paryant zail aani unique element find karel .
    while j< len(nums):
        if nums[j] == nums[i]: # unique nahi ka manje smaor ja
            j+=1
        else:
            # manjhe unique aahe tat me . unique element la i+1 (manjhech j) madhe sotre kar nar
            nums[i+1] = nums[j]
            i+=1 # ata next element varti ja 
    # finally
        # i number of element unique aahet . 
        # slice karun aapn array return karu
    k = i+1
    print(nums[:k])
    return k




    

print(removeDuplicates([2, 2, 2, 3, 3, 3, 4, 5, 6]))