for i in range(1, 6):
    for j in range(i,0,-1):
        if(j%2==1):
            print(1, end=' ')
        if(j%2 == 0):
            print(0, end=' ')
    print(end='\n')



# 1 
# 0 1 
# 1 0 1
# 0 1 0 1
# 1 0 1 0 1