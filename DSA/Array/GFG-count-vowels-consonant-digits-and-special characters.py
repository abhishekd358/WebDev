# Program to count vowels, consonant, digits and special characters in string.
# taken input as string
def countFunction(s):
    vowels = 0
    consonant = 0
    digit = 0
    specialChar = 0

    for i in range(len(s)):

        char = s[i]

        # ============================= check for alaphabets
        if( char >= 'a' and char<= 'z') or (char >='A' and char<='Z'):
            char= char.lower()
            # hum ne capital ko samll kar diya for better simplicatin 
            
            # ab chekc karenge ki vowel hai kya
            if(char == 'a' or char == 'e' or char=='i' or char=='o' or char=='u'):
                vowels +=1
            else:
                consonant +=1
        
        #================== now check is number or not
        elif( char>='0' and char<='9'):
            digit +=1
        else:
            specialChar +=1

    print("Vowels:", vowels)
    print("Consonant:", consonant) 
    print("Digit:", digit) 
    print("Special Character:", specialChar) 



countFunction(" ")




# ======================== built in .isaplha =>checks if character is letter 
# ========================= .isdigit => checks if character is letter






def countFunction(s):

    vowels = 0
    consonant = 0
    digit = 0
    special = 0

    for char in s:

        if char.isalpha():

            if char.lower() in "aeiou":
                vowels += 1
            else:
                consonant += 1

        elif char.isdigit():
            digit += 1

        else:
            special += 1

    print("Vowels:", vowels)
    print("Consonant:", consonant)
    print("Digits:", digit)
    print("Special Characters:", special)


countFunction("geeks for geeks121")




        