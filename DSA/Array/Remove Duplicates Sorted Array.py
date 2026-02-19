# You are given a sorted array arr[] containing positive integers. Your task is to remove all duplicate elements from this array such that each element appears only once. Return an array containing these distinct elements in the same order as they appeared.



def removeDuplicates(arr):
        
    unique_array = []
        
    i = 0
    while(i < len(arr)):
        if(arr[i] in unique_array):
            i+=1
        else:
            unique_array.append(arr[i])
    return unique_array
                

print(removeDuplicates( [0, 0, 3, 3, 5, 6]))