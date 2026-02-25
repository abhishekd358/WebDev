def countDigits(num):
    count = 0
    for i in (str(num)):
        if(num % int(i) == 0):
            count += 1
            print(i)

    return count
        
        





countDigits(1248)