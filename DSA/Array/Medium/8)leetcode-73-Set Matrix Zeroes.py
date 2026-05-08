class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
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

        
