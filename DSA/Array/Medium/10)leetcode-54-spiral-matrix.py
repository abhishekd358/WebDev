def spiralMatrix(matrix):

    left = 0
    right = len(matrix[0])-1
    top = 0
    bottom = len(matrix)-1

    temp = []

    while top <= bottom and left <= right:
        # step 1: left-> right  # printing top 
        for c in range(left, right+1):
            temp.append(matrix[top][c])
        top+=1

        # step 2: top -> bottom # printing right
        for r in range(top, bottom+1):
            temp.append(matrix[r][right])
        right-=1

        # step 3: right -> left   #printing Bottom
        for c in range(right,left-1, -1):
            temp.append(matrix[bottom][c])
        bottom-=1

        # step 4: bttom -> top # printing LEFT
        for r in range(bottom, top-1, -1):
            temp.append(matrix[r][left])
        left+=1

    #  my code work properly for 4*4 , 4*3 : ONLY Making problem for 3*4 matrixes 
    r = len(matrix)
    c = len(matrix[0])
    if r < c: 
        return temp[:-1]
    return temp










print(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
print(spiralMatrix([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]))
print(spiralMatrix([[1,2,3],[4,5,6],[7,8,9]]))