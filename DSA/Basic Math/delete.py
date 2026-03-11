def countPrime(nums):
    # create a True array of primes
    primeArray = [True] * nums

    #if nums less than 2 then return 0
    if(nums<=2):
        return 0

    # 0 and 1 are not prime so this are base case
    primeArray[0] = primeArray[1] = False

    # we check from 2 
    p = 2
    print(p)
    while(p<nums):
        if(primeArray[p]):
            for i in range(p*p, nums, p):
                primeArray[i] = False
        p+=1
    return sum(primeArray)

print(countPrime(1000))