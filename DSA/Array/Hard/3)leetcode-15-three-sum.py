#  BRUTH FORCE APPROACH ======= 
def threeSum(nums):
    main = []
    
    for i in range(len(nums)):
        # check for i and j and k
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                if i!=j and i!=k and j!=k:
                    if nums[i]+nums[j]+nums[k] == 0:
                        x = [nums[k], nums[i], nums[j]]
                        # x.sort()
                        main.append(x)
                        # if x not in main:
                        #     main.append(x)


    return main
    #  [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]

print("My bruth ",threeSum([2, -2, 0, 3, -3, 5]))



# ====================================================== BRUTH FORCE APPROACH 
def threeSum1(nums):
    st = set()

    for i in range(len(nums)):
        # check for i and j and k
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                if nums[i]+nums[j]+nums[k] == 0:
                    #  array sort kar ke tuple banake store karenge set ke andar
                    # taaaki duplicate triple na ho 
                    triplet = tuple(sorted([nums[i], nums[j],nums[k]]))
                    st.add(triplet)

    # Convert set to list of lists
    return [list(triplet) for triplet in st]

    #  [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]

print("brtuh",threeSum1([2, -2, 0, 3, -3, 5]))



# =============================================================== OPTIMAL APPRACOH 
def threeSum2(nums):
    ans = set()

    for i in range(len(nums)):
        # Set to store elements seen in this iteration
        hashSet = set()

        # Second loop for second element
        for j in range(i+1, len(nums)):
            # Calculate third element 
            thirdVal = (0-((nums[i]+ nums[j]))) # here we finding thrid Value 
            if thirdVal in hashSet:
                triplet = tuple(sorted([nums[i], nums[j], thirdVal]))
                ans.add(triplet)

            # Add current element to set of the NUMS array
            hashSet.add(nums[j])

    # Convert set to list of lists
    return [list(triplet) for triplet in ans]

    
print('BETTER',threeSum2([2, -2, 0, 3, -3, 5]))


# ========================================= OPTIMAL APPROCH

def threeSum3(nums):
    # first we sort the arrray 
    nums.sort()
    ans = []

    i = 0 
    for i in range(len(nums)):
        # skip duplicates 
        if i > 0 and nums[i] == nums[i-1]:
            continue

        j = i+1
        k = len(nums)-1

        # now this is nested while checks
        while j < k:
            #  for more optimal we not taking the same duplicate value of J and K . so to stop unnessary iteration.
        
            sum = nums[i] + nums[j] + nums[k]
        
            #  if mera sum 0 hai TO TRIPLET HAI,  to directly add karenge
            if sum == 0:
                ans.append((nums[i], nums[j], nums[k]))
                
                # skip J ke duplicate
                while j < k and nums[j] == nums[j-1]:
                    j+=1
                
                # skip K ke duplicates
                while j < k and nums[k] == nums[j+1]:
                    k-=1

                j+=1
                k-=1
            
            # if sum mera - NEGATIVE Hai
            # to hume J ko increment kar na padega taaki SUM postive Kar na hoga taaki SUM 0 aaye
            elif sum < 0:
                j+=1

            # if sum mera + POSTITIVE hai 
            # to hum K ko decerement Takki meri SUM 0 ho jaaye .
            else:
                k-=1
            

    return ans


            
            




    
print('OPTIMAL ',threeSum3([2, -2, 0, 3, -3, 5]))
# print('OPTIMAL ',threeSum3( [2, -1, -1, 3, -1]))