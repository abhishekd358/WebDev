# insertion sort mai hum:
        # Jo bhi bade element hai usko hum RIGHT SHIFT karenge . jab ho jaye . tab hum Hmare chooote element ko INSERT karnege
        # es ke liye mujhe current Element previous element se compare kar na padega


# FOR LOOP : OUTER :-> ye loop 1 index se start hoga
# WHILE LOOP : INNER:  ye wala loop 0 se start hoga 


def insertionSort(arr):
    

        for i in range(1, len(arr)):  # 1, 2, 3, 4, 5 , 6, 7......................
            currentElement = arr[i]    # current i se ek jada hoga
            

            # current element paasun ek element kami(manjhe previous element) chottta aahe ka check ckaryacha aahe . aasel choota tar sarava MOTHE(LARGEGE) element shift to RIGHT.
            j = i-1
            # aapn compare currenetelement la . 0 index paryant capmare kart jaau
            while(j>=0 and currentElement < arr[j]):   # arr[1 index] < arr[0 index]
                # chotta assel current element previous peksha tar 
                # SWAP kar nar RIGHT LA
                arr[j+1]= arr[j]  
                
                # aani j kami kar nar  karan aapan left kade chaalo (previous element kade chalo)
                j-=1

            # jeva right shift hoil mothe element theva INSERT karu aapla lahan CURRENTELEMENT
            arr[j+1] = currentElement
            

        print(arr)

insertionSort([7, 4, 1, 5, 3])
