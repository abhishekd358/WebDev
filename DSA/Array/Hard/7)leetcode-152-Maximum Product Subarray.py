def maxProduct(self, nums: List[int]) -> int:
    # left se product calculate karenge
    prefixProd = 1
    # right se bhi product calculate karenge
    suffixProd = 1
    # maximum product store karne ke liye
    maxProduct = float('-inf')
    for i in range(len(nums)):
        # agar product 0 ho gaya
        # matlab chain break ho gayi
        # to dobara 1 se start karenge
        if prefixProd == 0:
            prefixProd = 1
        if suffixProd == 0:
            suffixProd = 1
        # left -> right product
        prefixProd *= nums[i]
        # right -> left product
        suffixProd *= nums[(len(nums) - 1) - i]
        # dono direction mai jo maximum mile
        # usko answer mai store karenge
        maxProduct = max(maxProduct,max(prefixProd, suffixProd))
    return maxProduct