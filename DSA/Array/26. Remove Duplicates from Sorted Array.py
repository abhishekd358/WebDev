#   approach: 
#     we create a {temp} arr where we put unique int from the {Nums} array and pop the int if it requcuring in {Nums} array if occure more than 1 time


def removeDuplicates(nums):
    #  temp array set for unique items/int
    arr = []
    i = 0

    #  loop till the len of nums 
    while(i< len(nums)):
        # check is item present in array : then we .pop from the Nums array
                                                                    # when we pop then the Nums array change 
        if(nums[i] in arr):
    
            print(nums[i], "present hai-->",arr)
            print(i)
            nums.pop(i) # [0, 2, 3,3,4](2nd place '0' pop) => [0,2,3,4](4th palce '3' pop) 
        else:
            arr.append(nums[i]) # else : append the unique item 
            i+=1

    print(arr)
            




removeDuplicates([0,0,2,3,3,4])