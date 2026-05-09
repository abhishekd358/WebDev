# ====================================== BRUTH FORCE APPROACH 
# Time → O(n²)
# Space → O(n²)

def rotate(matrix):

    rows = len(matrix)
    cols = len(matrix[0])
    
    # create a temp matrix
    
    tempMatrix = [[0 for _ in range(cols)] for _ in range(rows)]
    # n*n
    # now we loop 
    for r in range(rows):
        for c in range(cols):
            # swap karenge [r][c] ke postion ko and waha pe current element put kardenge
            tempMatrix[c][r] = matrix[r][c]
    
    # n*n
    for r in range(rows): # complexity : n 
        tempMatrix[r].reverse() # complexoty : n

    return tempMatrix

# ================================================================ OPTIMAL APPRAOCH
# Time → O(n²)
# Space → O(1)

def rotate(matrix):

    rows = len(matrix)
    cols = len(matrix[0])
    

    # n*n
    # now we loop 
    for r in range(rows):
        for c in range(r, cols):
            # swap karenge [r][c] ke postion ko and waha pe current element put kardenge
            matrix[r][c],matrix[c][r] =  matrix[c][r], matrix[r][c]
    
    # n*n
    for r in range(rows): # complexity : n 
        matrix[r].reverse() # complexoty : n

    return matrix


print(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))