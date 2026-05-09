class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:

# ====================================== OPTIMAL : 
                                            # time : (n*m)
                                            # space : O(1)
        rows = len(matrix)
        cols = len(matrix[0])
        isFirstElementZero = False
        # 1 step : we loop through and put 0 of respective row and col in 1st row and 1s col
        for r in range(rows):
            for c in range(cols):
                # now check is zero
                if matrix[r][c] == 0:
                    # make matrix 1st row index's 0
                    matrix[0][c] = 0

                    # ALSO make matrix 1st column index's to 0 expect [0][0]
                    if r > 0:
                        matrix[r][0] = 0
                    else:
                        isFirstElementZero = True

        # Step 2 : now we place 0 except 1st ROW and 1st COLUMN
        for r in range(1, rows):
            for c in range(1, cols):
                if matrix[r][0]==0 or matrix[0][c] == 0:
                    matrix[r][c] = 0
        
        #Step 3: now we place 0 in the 1st COLUMN
        if matrix[0][0] == 0:
            for r in range(rows):
                matrix[r][0] = 0
                
        # STEP 4: if mera [0][0] means isFirstElementZero hai to ROW BHi 0 hoga
        if isFirstElementZero:
            for c in range(cols):
                matrix[0][c] = 0

    



# ======================================== Better : 
                                        # time : (n*m)
                                        # space : (n+m)
                                       
        # row  and columns
        r = len(matrix)
        c = len(matrix[0])

        rowTrack = [0]* r
        colTrack = [0]* c

        # loop on each element of matrix
        for i in range(r):

            for j in range(c):
                if matrix[i][j] == 0:
                    # if zero then we record by marking in the rowTrack and colTrack
                    rowTrack[i] = -1
                    colTrack[j] = -1

        # now we place zero
        for i in range(r):
            for j in range(c):
                if rowTrack[i] == -1 or colTrack[j] == -1:
                    matrix[i][j] = 0
    
        
# ======================================== Bruth approach :
                                # time : O([(n*m)*(n+m)] + (n*m))
'''
        r = len(matrix)
        c = len(matrix[0])

        for i in range(r):
            for j in range(c):
                # now check ki bhai 0 hai kya tu
                if matrix[i][j] == 0:
                    # hai to hum us ke index par hum INFINITY ∞ put kar denge
                    self.infinityPut(matrix, i , j)
        
        # ab humne sabhi 0 apperar row and col mai infinity put kiye 
        for i in range(r):
            for j in range(c):
                # now ab jaha infity hai us ko 0 kar denge
                if matrix[i][j] == float('inf'):
                    matrix[i][j] = 0


    # TIME : O(N+M)
    # heleper function jo ki infinity put kareng . jis bhi postion par 0 dikha . us ke row & col
    def infinityPut(self, matrix, row, col):
        r = len(matrix)
        c = len(matrix[0])
        # making all elements in  columns to ∞ infity to respective 0 seen
        for i in range(r):
            if matrix[i][col] != 0:
                matrix[i][col] = float('inf')
        # making all the rows to infinity ∞ to respective 0 seen
        # to es liye row constant rahega and column index change hoga
        for j in range(c):
            if matrix[row][j] != 0:
                matrix[row][j] = float('inf')
            
'''

        
