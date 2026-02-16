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
        
        # if array get fulled we resize the current array capacity
        self.resize(self.size*2)

    # resize : we double the current array size , array content shift to new array
    def resize(self, new_capacity):
        new_capacity_array = self.__make_array(new_capacity)
        self.size = new_capacity

        # now shift the data from old array to new array . Self.A ----> new_capcity_array
        for i in range(self.n):
            new_capacity_array[i] = self.A[i] # shift
        

        # Finallay , After all shifiting values to new array , we update the old array
        self.A = new_capacity_array



    # print
    def __str__(self):
        temp_str = ''
        
        for i in range(self.n):
            temp_str += str(self.A[i])+ ', '
        
        return '[' + temp_str[:-2] + ']'
    
    

    




x = MyList()
print(len(x))
x.append('abhi')
x.append('rakesh')
print(len(x))
x.append('rash')
print(x)



