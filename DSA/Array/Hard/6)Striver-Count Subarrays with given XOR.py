class Solution:

    def subarrayXor(self, nums, k):

        # total subarrays jinka XOR = k hoga
        count = 0

        # yaha prefix XOR aur uska frequency store hoga
        stack = {}

        # base case:
        # XOR = 0 starting mai ek baar already present maana hai hum ko.
        stack[0] = 1

        # current prefix XOR
        xorCurr = 0

        for i in range(len(nums)):

            # current prefix XOR update
            xorCurr = xorCurr ^ nums[i]

            # formula:
            #
            # xorCurr ^ oldPrefix = k
            #
            # therefore:
            #
            # oldPrefix = xorCurr ^ k
            #
            # agar oldPrefix hashmap mai mila
            # matlab subarray XOR = k exist karta hai
            if xorCurr ^ k in stack:

                # jitni frequency hai utne subarrays milenge
                count += stack[xorCurr ^ k]

            # current XOR ko hashmap mai store/update karenge
            if xorCurr not in stack:
                stack[xorCurr] = 1
            else:
                stack[xorCurr] += 1

        return count