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
        return self.n


    # append 
    def append(self, value): # taking value from user 
        # check is the array not be fulled . if fulled we have to make the array size double . else we append
        if(self.n < self.size):
            self.A[self.n] = value
            self.n += 1
        
        # if array get fulled we resize the current array capacity
        self.__resize(self.size*2)

    # resize : we double the current array size , array content shift to new array
    def __resize(self, new_capacity):
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
    
    

    
    def __getitem__(self, index):
        if 0 <= index< self.n:
            return self.A[index]
        return 'IndexOutOfBound : Please enter correct index'

    def pop(self):
        if self.n== 0:
            print('OperationFail: Empty Array')
            return
        self.A[self.n-1]
        self.n -= 1



    def clear(self):
        self.size = 1
        self.n = 0

    def find(self, value):
        for i in range(self.n):
            if(self.A[i] == value):
                return i
        
        # if value not present
        return "NotFound : item not found"
    
    def insert(self, index, value):

        # boundary check
        if index < 0 or index > self.n:
            print("IndexOutOfBound")
            return

        # insert when we do : Shifting have to implement

        # first we neeed to check is my arrray have space . 
        if(self.n == self.size):
            self.__resize(self.size*2)
        
        for i in range(self.n, index, -1): # reverse loop
            self.A[i] = self.A[i-1]   # shifiting

        # now we here insert after shifiting
        self.A[index] = value  
        self.n += 1                             


    def __delitem__(self, index):
        if index <= 0 or index >self.n:
            return 'IndexOutOfBound'
        
        for i in range(index, self.n-1):
            self.A[i] = self.A[i+1]
        self.n = self.n-1
                
    
    def remove(self, value):
        
        index =  self.find(value)

        if(type(index)== int):
            return self.__delitem__(index)
        else:
            return 'item not found in array' 







        






x = MyList()
print(len(x))
x.append('abhi')
x.append('rakesh')
print(len(x))
x.append('rash')
x.append(99)
print(x)

print(x[3])
x.pop()
print(x)


x.insert(3, 'ola')
print(x)





