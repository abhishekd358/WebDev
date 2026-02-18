num  =[12, 35, 1, 10, 34, 1]
def largestElement(num):
    largest = 0

    '''================= Approach 1'''
    for i in range(len(num)-1):
        if(num[i]> num[i+1]):
            largest = num[i]
        else:
            largest = num[i+1]            
            
    print(largest)

    '''================= Approach 2'''
    for i in range(len(num)):
        if(num[i]> largest):
            largest = num[i]
    print(largest)




largestElement(num)
            