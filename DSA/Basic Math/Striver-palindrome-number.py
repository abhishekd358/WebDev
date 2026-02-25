def isPalindrome(n):
    # if we reverse number it should be same
    reverse = 0
    num = n 
    while(n>0):
        lastDigit = n % 10
        reverse = reverse * 10 + lastDigit
        n = n // 10
    
    return reverse == num
print(isPalindrome(-121))