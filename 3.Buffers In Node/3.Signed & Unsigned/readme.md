• Memory stores only bits (no negative sign).
• CPU does NOT automatically know negative.
• The instruction (signed or unsigned) tells CPU how to interpret bits.
• In signed mode (Two’s Complement):
      MSB = 1 → negative
      MSB = 0 → positive
• 11111011:
      unsigned → 251
      signed → -5



Unsigned → only positive, full range used.
Signed → positive + negative, uses Two’s Complement.

Two’s Complement:
  - Invert bits + add 1 → negative number.

8-bit signed range: -128 to +127
8-bit unsigned range: 0 to 255

UTF-8 → uses unsigned bytes (0–255), never signed.
Characters encoded in 1–4 bytes.
