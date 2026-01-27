

# CSS

<details>
  <summary> Q1. What is static , fixed , sticky , realtive and absolute in position property ?</summary>

## 📍 `position: static` (Default)

* **Default position**
* Follows **normal document flow**
* `top, right, bottom, left` ❌ **don’t work**



## 📍 `position: relative`

* Positioned **relative to itself**
* Original space **is preserved**
* `top / left / right / bottom` ✅ work



## 📍 `position: absolute`

* Positioned **relative to nearest positioned ancestor**
  (non-static parent)
* Removed from **normal document flow**
* If no parent → relative to **viewport**


## 📍 `position: fixed`

* Positioned **relative to viewport**
* **Does not move on scroll**
* Removed from document flow
* Used for **navbar, chat icon**



## 📍 `position: sticky`

* Acts **relative → fixed** on scroll
* Sticks after crossing a defined point
* Needs `top`, `left`, etc. to work
* Works **inside its parent container**

</details>


<details>
  <summary> Q2. Difference between `display: none` and `visibility: hidden` and `opacity: 0` ?</summary>

* `display: none`

  * Element is **removed from layout**
  * No space occupied
* `visibility: hidden`

  * Element is **invisible**
  * Space **is still reserved**

* `opacity: 0` 
   * invisible but clickable & occupies space

</details>

<details>
  <summary>Q3. What is CSS specificity? Order of priority?</summary>

</br>

- Specificity decides **which CSS rule wins**.

- Priority order:

1. `!important`
2. Inline styles
3. ID selectors
4. Class / attribute / pseudo-class
5. Element selectors

</details>


<details>
  <summary>Q4. Why is <strong>!important</strong> considered bad practice?</summary>
</br>

* Makes debugging hard
* Causes maintainability issues
* Should be used **only in edge cases**

</details>


<details>
  <summary> Q5. Difference between <strong> em, rem, %, px?
</strong></summary>

**Answer:**

* `px` → fixed unit
* `em` → relative to **parent font-size**
* `rem` → relative to **root (html) font-size**
* `%` → relative to **parent element**

👉 `rem` preferred for scalable, accessible UI

</details>

<details>
  <summary> Q6. What is stacking context?</summary>

**Answer:**

* Controls **z-axis (depth)** rendering
* Created by:

👉 `z-index` works **only inside same stacking context**

</deatils>