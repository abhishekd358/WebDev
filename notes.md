

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
  <summary> Q2. Difference between <strong>display: none</strong> and <strong>visibility: hidden</strong> and <strong>opacity: 0</strong> ?</summary>

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

</details>


<details>
  <summary>
 Q7. <strong>Flexbox vs Grid </strong>– when do you use each?</summary>

**Answer:**

* **Flexbox**

  * One-dimensional (row **or** column)
  * Best for components (navbar, cards, buttons)
* **Grid**

  * Two-dimensional (rows **and** columns)
  * Best for full layouts (pages, dashboards)

👉 Rule: *Layout = Grid, Component = Flex*

</details>


<details>
  <summary> Q8. Difference between <strong>justify-content</strong> and <strong>align-items</strong>?
</strong></summary>

**Answer:**

* `justify-content` → **main axis**
* `align-items` → **cross axis**

👉 Axis depends on `flex-direction`

</details>

<details>
  <summary> Q9. Why does <strong>height: 100%</strong> not work sometimes?
</summary>

**Answer:**

* Parent element has **no defined height**
* `%` height depends on **parent height**

👉 Fix: define height on parent or better use `100vh`
</details>

<details>
  <summary> Q10. Difference between <strong>overflow: hidden</strong> and <strong>overflow: auto</strong>? 
</summary>

**Answer:**

* `hidden` → clips content, no scroll
* `auto` → scroll appears **only if needed**
</details>

<details>
  <summary> 
Q11. What is <strong>min-width</strong> and why is it important in responsive design?
</summary>

**Answer:**

* Prevents element from shrinking below a limit
* Avoids broken layouts on small screens

👉 Common in tables, cards, images
</details>

<details>
  <summary> 
Q12. Why does <strong>z-index</strong> sometimes not work?
</summary>


**Answer:**

* Element is not **positioned** (`relative`, `absolute`, etc.)
* Element is in a **different stacking context**
* Parent has lower `z-index`

👉 `z-index` works **only on positioned elements and within same stacking context**

</details>

<details>
  <summary> 
Q13. What is <strong>object-fit</strong> and when do you use it?
</summary>

**Answer:**

* Controls how images/videos fit inside containers
* Common values:

  * `cover` → fills container, may crop
  * `contain` → fully visible, may leave space

👉 Used with `<img>` instead of background images

</details>


<details>
  <summary> 
Q14. Why does <strong>position: sticky</strong> fail sometimes?
</summary>

**Answer:**

* Parent has `overflow: hidden/auto/scroll`
* No `top` value defined
* Parent height is too small


</details>

<details>
<summary>Q15. What is Block Formatting Context (BFC)?</summary> 

**Answer:**

* A separate layout region in CSS
* Prevents margin collapse
* Contains floats
* Controls layout isolation

**Created by:**

* `overflow: hidden / auto`
* `display: inline-block`
* `position: absolute / fixed`
* `display: flow-root`

👉 Modern fix: `display: flow-root`

</details>

<details>
  <summary> 
Q16. What is margin collapsing?
</summary>

**Answer:**

* Vertical margins of **block elements** combine into a **single margin**
* The **largest margin value** is considered as the combined margin
* Only top and bottom margins collapse
* Margin collapsing can be controlled by **specifying top-margin or bottom-margin separately**

**Example**

* `div1 → margin: 40px`
* `div2 → margin: 20px`
* Total margin is not 60 between them: **40 + 20 ❌**
* Collapsed combined margin (applied): **40px ✅**

</details>

<details>
  <summary> 
Q17. Why does <strong>inline-block</strong> create unexpected gaps?
</summary>

**Answer:**

* Browser treats whitespace like text nodes

**Fixes:**

* Remove whitespace in HTML
* Set `font-size: 0` on parent

</details>

<details>
  <summary> 
Q18. Clearfix vs modern solutions — what do you prefer?**
</summary>


**Answer:**

* Clearfix → old hack using pseudo-elements
* Modern → `overflow: hidden` or `flow-root`

👉 Flexbox/Grid remove need for clearfix

</details>

<details>
  <summary> 
Q19. How can you center a <strong>div</strong> both horizontally and vertically?
</summary>

**Answer:**

* Best way:

```css
display: flex;
justify-content: center;
align-items: center;
```

👉 Works in almost all layouts

