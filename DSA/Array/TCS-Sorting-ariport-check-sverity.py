"""
    Airport security officials have confiscated several item of the passengers
    at the security check point. All the items have been dumped into a huge box(array).
    Each item possesses a certain amount of risk[0, 1, 2]. Here, the risk severity
    of the items represent an array[] of N numbers of integer values.
    The task here is to sort the items based on their levels of risk in the array.
    The risk values range from 0 to 2.

    The solution should be in O(n) time complexity and in that case
    you are not supposed to use any inbuilt sorting algorithm.

    Example 1:

    Input :
        7 → Value of N
        [1, 0, 2, 0, 1, 0, 2] → Elements of arr[0] to arr[N-1], while input each element is separated by new line.

    Output :
        0 0 0 1 1 2 2 → Element after sorting based on risk severity

    Example 2:

    Input :
        10 → Value of N
        [2, 1, 0, 2, 1, 0, 0, 1, 2, 0] → Elements of arr[0] to arr[N-1], while input each element is separated by new line.

    Output :
        0 0 0 0 1 1 1 2 2 2 → Element after sorting based on risk severity

"""


def arrangeItem(arr):
    count0 = count1 = count2 = 0

    for item in arr:
        if(item == 0):
            count0 +=1
        elif(item == 1):
            count1 +=1
        else:
            count2 +=1

    svereityArr = [0] * count0 + [1] *count1 + [2] * count2
    print(svereityArr)


arrangeItem( [1, 0, 2, 0, 1, 0])
