def selectionSort(arr):

    # ========================= simple with for ✅ 
    for i in range(len(arr)):
        min = arr[i]
        minValIndex = i
        for j in range(i, len(arr)):
            if(arr[j]< min):
                # then update min
                min = arr[j]
                minValIndex = j
        
        # now swap for current Index i 
        arr[i], arr[minValIndex] = arr[minValIndex], arr[i]
    print(arr)

        
    for i in range(len(arr)):
        minValue = arr[i] # cthe current index will be min value we assume 
        minvalueIndex = i  # we store it index as well
        
        # nested loop to find min value from cureentIndex (i)
        for j in range(i, len(arr)): 
            if(arr[j]< minValue):
                minValue = arr[j]
                minValueIndex = j
                
        # ab minimum mil gaya let SWAP
        arr[i], arr[minValueIndex] = arr[minvalueIndex], arr[i]
        
    print(arr)

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    # ============================================================= WHile loop 🔴
    
    
    # min find 
   
    # forIndex = 0
    # while forIndex < len(arr):
    #     print('outerLoop---->', forIndex)
    #     i = forIndex
    #     min = arr[forIndex]
    #     minValueIndex = forIndex
    #     while i < len(arr):
    #         print('inner-->', i)
    #         if(arr[i]<min):
    #             min = arr[i]
    #             minValueIndex = i
    #         i+=1
    #     print(min)
    #     print("===swap====")
    #     # Swap for 0 index
    #     arr[forIndex], arr[minValueIndex] = min, arr[forIndex] 
    #     # increment the forIndex by 1 for
    #     print(arr)
    #     print("=======\n")
    #     forIndex +=1
    # print(arr)


    
    
    
    
    
    
    
    
    
    
    # # take the min from array 
    # min = arr[0]
    # for i in range(len(arr)):
    #     # mininmmuim find
    #     for j in range(i+1, len(arr)):
    #         if(min> arr[j]):
    #             # update min
    #             min = arr[j]
    #     #Swap
    #     minIndex = arr.index(min) 
    #     print(minIndex)
    #     arr[minIndex], arr[i] = arr[i], min
    # print(arr)
        






selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])