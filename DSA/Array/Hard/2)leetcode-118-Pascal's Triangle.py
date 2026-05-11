def pascal(row):
    main=[]
    for r in range(row):
        temp = []
        for c in range(r+1):
            if c == 0 or c == r:
                temp.append(1)
            else:
                temp.append(main[r-1][c] + main[r-1][c-1])
        main.append(temp)
    return main

    
    




print(pascal(5))