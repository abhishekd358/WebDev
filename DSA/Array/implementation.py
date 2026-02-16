import ctypes




class MyList:
    # when we creating a dynamic array the array have
        # size
        # number of element 

    def  __init__(self):
        self.size = 1
        self.n = 0

        # create a array using __make_array ficntion
        self.A = self.__make_array(self.size)


    # here we create a array of size using the C++ module 
    def __make_array(self, new_capacity):
        return (ctypes.py_object * new_capacity)()
    
    

    # first length find
    def __len__(self):
        return self.size


    # append 
    def append(self, value): # taking value from user 
        # check is the array not be fulled . if fulled we have to make the array size double . else we append
        if(self.n <= self.size):
            self.A[self.n] = value
            self.n += 1




    # print
    def __str__(self):
        for i in range(self.n):
            return self.A[i]
    
    

    




x = MyList()
print(len(x))
x.append('abhi')
print(x)



