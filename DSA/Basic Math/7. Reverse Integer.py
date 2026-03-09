def reverse(n):
    orgNum = n
    n = abs(n)
    reverse = 0
    while(n>0):
        last_digit = n % 10 
        reverse = reverse * 10  + last_digit
        n = n // 10
    if(orgNum>0):
        return reverse
    else:
        return -reverse

print(reverse(321))




