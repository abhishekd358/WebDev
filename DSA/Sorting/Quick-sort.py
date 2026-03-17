class Solution:
    def quickSort(self, arr, low, high):
        # base case : jab hamara low choota hai high se tabhi hume perform kar na hai
        if( low < high):
            pivotCorrectIndex = self.partition(arr, low, high)

            self.quickSort(arr, low, pivotCorrectIndex-1)
            self.quickSort(arr, pivotCorrectIndex+1, high)
            
    
    def partition(self, arr, low, high):
        i = low 
        j = high
        pivot = arr[low]

        # OUTER LOOP
        while(i<j):
            
            # LEFT SIDE ARRAY SORTING
            #- kya element choota hai pivot se ---> to aage bado . else bada mile to break
            while(i<= high and arr[i]<= pivot):
                i+=1
            
            while( j>= low and arr [j] > pivot):
                j-=1

            # 2 while loop break hogaye means we find correct element .means
                                            # on left we get GREATER element and on right we Get samller element # -----> then we have to swap

            if( i<j):
                arr[i],arr[j] = arr[j], arr[i]
        
        # yaha hume PIVOT ko right postion par put kar na hai
        # print(arr)
        # print('i:',i,'j:', j)
        # arr[j], arr[low] = pivot, arr[j]
        arr[j], arr[low] = arr[low], arr[j]
        # print(arr)
        return j



            



x = Solution()
print(x.quickSort([4, 6, 2, 5, 7, 9, 1 , 3], low=0, high=7))