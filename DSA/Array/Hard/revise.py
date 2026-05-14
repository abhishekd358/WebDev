# ========================= WORST approch
def threeSome1(nums):
    ans= set()
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                # hum check karenge sum =0 hai kya
                if nums[i]+nums[j]+ nums[k] == 0:
                    # then we sort the triplet and add to the tuple 
                    triplet=tuple(sorted((nums[i], nums[j], nums[k])))
                    ans.add(triplet)

    # now we jsut convert triplet tuple into array and return 
    return [list(triplet) for triplet in ans]


    

print(threeSome1([-1,0,1,2,-1,-4]))


def threeSome2(nums):
    # mujhe pata hai thrid value kya hogi 
    # i + j + k == 0 
    # k = 0 - i - j

    ans = set()
    for i in range(len(nums)):
        hash = set()
        for j in range(i+1, len(nums)):
            thridVal =0 - (nums[i]+nums[j])

            if thridVal in hash:
                # hai to triplet mil jayega
                ans.add(tuple(sorted((nums[i], nums[j], thridVal))))
            
            # if thrid value HASH  main nahi hai 
            # current Value ko add kardenge
            hash.add(nums[j])

    # now we jsut convert triplet tuple into array and return 
    return [list(triplet) for triplet in ans]

     

print(threeSome2([-1,0,1,2,-1,-4]))


def threeSome3(nums):
    
    nums.sort()

    ans =[]

    for i in range(len(nums)):
        # i ka duplicate hum skip karete hai
        if i > 0 and nums[i] == nums[i+1]:
            continue

        j = i+1
        k = len(nums)-1

        while j < k: 

            # sum calualate karto 
            sum = nums[i]+ nums[j]+nums[k]

            if sum == 0:
                # tar mi triplet la ans madhe add kar naar
                ans.append([nums[i], nums[j],nums[k]])
                j+=1
                k-=1

                # aani J la right la nenar and K la left la lenar
                # ashyad tikaani jite current element ha PREV sobat DUPLICATE NASALYE PAHEJE
                while j < k and nums[j] == nums[j-1]:
                    j+=1
                while j < k and nums[k] == nums[k+1]:
                    k-=1
                
            elif sum < 0 :
                # means j ko postitve number ke tarf le jana padega . more right
                j+=1
            else:
                k-=1
    return ans


                

print(threeSome2([-1,0,1,2,-1,-4]))