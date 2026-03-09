#======================= TAIL
# this recursion is from tail 
# first tail ouptput print 

def printName(n):
    if(n == 0):
        return 
    printName(n-1)
    print(n)

printName(5)

print('==============================================')
# ===================== HEAD



def printNameHead(n):
    if( n == 0):
        return 
    print(n)
    printNameHead(n-1)

printNameHead(5)






arr []