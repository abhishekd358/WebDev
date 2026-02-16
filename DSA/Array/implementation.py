import ctypes




class MyList:
    # when we creating a dynamic array the array have
        # size
        # number of element 

    def  __init__(self, size):
        self.size = size
        self.n = 0


    # here we create a array of size using the C++ module 
        self.capacity = (ctypes.py_object * size)
    
    

    # first length find
    def __len__(self):
        return self.size


    




x = MyList(8)
print(len(x))