def primeNumber(num):
    primeArr = [True] * num

    primeArr[0] = primeArr[1] = False

    p = 2

    while p < num**0.5:
        if(primeArr[p]):
            # if treue hai p to ham uske sabhi multiples ko false kar denege
            for j in range(p*p, len(primeArr), p):
                primeArr[j] = False
        p+=1
    return sum(primeArr)



print(primeNumber(1000))