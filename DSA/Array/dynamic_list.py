'''
remove
sort
min
max
sum
extended
negative slicing
merge

'''

import ctypes

class DynamicArray:
    def __init__(self):
        self.size = 1
        self.n = 0

        self.A = self.__Make_array(self.size)

    # crating a array using c data types
    def __Make_array(self, new_capcity):
        return (new_capcity*ctypes.py_object)()
    
    # length
    def __len__(self):
        return self.n
    
    # append
    def append(self, value):
        if self.size == self.n:
            self.__resize(self.size*2)
        
        self.A[self.n] = value
        # increment karna padeja self.n
        self.n += 1 
    
    # resize
    def __resize(self, new_capacity):
        B = self.__Make_array(new_capacity)
        # size change ho jaeyaga beacuse hamne new_capacity ke size ka empty array
        self.size = new_capacity
         
        # abhi copy karenge self.A content or add karte jange B ; loop use karke
        for i in range(self.n):
            B[i] = self.A[i] # B ka i th element A ke i se equal ho jayega
        
        # reassign karlenge ; B ko A bana denge
        self.A = B

    # print
    def __str__(self):
        # ek empty string banayenge 
        empty_str = ''
        # loop chalayenge or add karte jange empty sring
        for i in range(self.n):
            empty_str = empty_str + str(self.A[i]) +', '
        
        # abhi loop se bhar or pint karenge array ke form mai
        return '['+ empty_str[:-2] +']'
    

    # index
    def __getitem__(self, index): # pass kar na padta hai ek index ; index ka value hum return kar dete hai
        if 0 <= index < self.n:
            return self.A[index]
        else:
            return 'IndexError : index out of range.'
    
    # pop
    def pop(self):
        if self.n == 0:
            print("Empty Array")
            return
        print(self.A[self.n-1])
        # hum element ko pop kar rahe hai so self.n decrement by 1
        self.n -= 1

    # clear 
    def clear(self):
        self.size = 1
        self.n = 0

    # find
    def find(self, value):
        for i in range(self.n):
            if self.A[i] == value:
                return i
            
        return 'ValueError : Value is Not Found. '
    
    # insert
    def insert(self, pos, new_value):
        # check if array size kay full if yes to hame resize kar na padega
        if self.size == self.n:
            self.__resize(self.size*2)

        for i in range(self.n, pos, -1):
            self.A[i] = self.A[i-1]

        # hum exit kar rahe hai loop se jab hum position value tak pahuch chuke honge
        self.A[pos] = new_value
        # as hum log add kar rahe hai element ko to  self.n increment ho jayega
        self.n += 1

    # delete
    def __delitem__(self, index):
        if 0 <= index < self.n:
            for i in range(index, self.n-1):
                self.A[i] = self.A[i+1]
            # hum exit kar rahe hai loop se
            self.n = self.n - 1 
        else: 
            return "IndexError - Index out of range"
        

    # remove
    def remove(self, value):
        # hum find value ko in a list with the help of find function jo phele banaya tha
        # find kya karata hai index return kar ta hai value
        index = self.find(value)

        if type(index) == int:
            # delete  kya kar ta hai index ko delete kar ta hai
            # __delitem__ method ko use kar ke hum delete karenge
            return self.__delitem__(index)
        else:
            return ''
        


l = DynamicArray()
l.append(1)
l.append(3)
l.append(5)
l.insert(3, 14)
