class Solution:
 
    def mergeSort(self, arr, low, high):
        # jar low and high same zala manje array 1 element parayant divide zala
        if(low == high):
            return
        mid = (high+low) //2
        
        #============ call recursion 
        self.mergeSort(arr, low, mid)
        self.mergeSort(arr, mid+1, high)
        self.merge(arr, low, mid, high)
    
    def merge(self, arr, low, mid, high):
        
        # [1, 2, 3 , 4] and [2, 4, 5, 6]
        # let suppose we have 2 array  
        left = low    # left array's 0 index
        right = mid+1 # right array's 0 index
        
        tempArray = []
        
        # compare the both array element and append to TEMPORARAY array
        while( left<= mid and right<= high):
            if(arr[left] < arr[right]): # left array ka 0 index kya chotta hai Right array ke 0 index se 
                tempArray.append(arr[left]) # hai to temp mai dal do
                left += 1
            else:
                tempArray.append(arr[right]) # right wala choota hai 
                right +=1
                
        
        
        # ab hum kisi bhi 2 array ke sabhi element ko TEMPORAYRY ARRAY mai dal chuke hnge.
        # but abhi kisi 2 me se 1 array ke kuch element REMAINING honge us ko loop chalakar TEMPORARY Array mai dal denge
        
        # LEFTOVER ELEMENT FROM ONE OF 2 ARRAY APPEND TO TEMPORARAY ARRAY
        
        while(left<=mid):
            # left ke left element ko aapend kro temp mai
            tempArray.append(arr[left])
            left+=1
        
        while(right<=high):
            # right array che element kahi rahile astil append kara temp madhe
            tempArray.append(arr[right])
            right+=1
            
            
        #=========================== NOW Overwrtie original ARRAY with TEMPORARY array elemetn
        
        for i in range(low, high+1):
            arr[i] = tempArray[i-low]
        
        
        return arr


