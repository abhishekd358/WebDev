def merge(intervals):

    # pehle saare intervals ko sort karenge
    # sorting start value ke basis par hogi
    intervals.sort()

    # final merged intervals yaha store honge
    ans = []

    # first interval ko current interval maan liya
    currArr = intervals[0]

    # second interval se traversal start
    for i in range(1, len(intervals)):

        # overlap condition
        #
        # agar next interval ka start
        # current interval ke end se chota/equal hai
        # matlab overlap hai
        if intervals[i][0] <= currArr[1]:

            # intervals merge karenge
            #
            # start same rahega
            # end mai maximum lenge
            currArr = [
                currArr[0],
                max(currArr[1], intervals[i][1])
            ]

        else:

            # overlap nahi hai
            #
            # current merged interval ko answer mai daal do
            ans.append(currArr)

            # ab next interval current ban jaayega
            currArr = intervals[i]

    # loop ke baad last interval bach jaata hai
    # usko manually add karna padta hai
    ans.append(currArr)

    return ans



