

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

</details>

<details>
  <summary> 
Q20. What is the difference between repaint and reflow (layout)?
</summary>




**Answer:**

* **Reflow (Layout)**

  * Browser recalculates element size & position
  * Expensive operation
* **Repaint**

  * Only visual changes (color, background)

👉 Reflow > Repaint in cost


</details>

<details>
<summary>Q21. Which CSS properties trigger reflow?
  </summary> 

**Answer:**

* `width`, `height`
* `padding`, `margin`
* `display`
* `position`
* `font-size`

👉 Animating these causes performance issues

</details>

<details>
  <summary> 
Q22. Why are <strong>transform</strong> and <strong>opacity</strong> preferred for animations?
</summary>

**Answer:**

* They **do not trigger reflow**
* GPU-accelerated

</details>

<details>
  <summary> 
Q24. What is <strong>will-change</strong>? When should you avoid it?
</summary>

**Answer:**

* **What is `will-change`? (Simple)**

* `will-change` tells the **browser in advance** that an element is **going to change**
* So the browser **optimize performance** before the change happens
* Mostly used for **animations, transforms, and opacity**



**Why we use `will-change`**

* To make **animations smoother**
* To reduce **lag or repaint cost**
* To prepare browser for **heavy UI changes**



**Common Values**

* `will-change: transform;`
* `will-change: opacity;`
* `will-change: top, left;`

**Simple Example**

```css
.card {
  will-change: transform;
}
```

👉 Use only when needed, remove later when changes stop.

</details>

<details>
  <summary> 
Q25. What is the CSS <strong>contain</strong> property?
</summary>

**Answer:**

* Limits layout, paint, or size calculations
* Improves rendering performance

Example:

```css
contain: layout paint;
```

👉 Useful for large components
</details>

<details>
  <summary> 
Q26. What problems do CSS architectures like BEM solve?
</summary>

**Answer:**

* Prevent class name conflicts
* Improve readability & scalability
* Make large CSS codebases maintainable

👉 Common patterns: **BEM, OOCSS, SMACSS**

</details>

<details>
  <summary> 
Q27. Explain BEM naming convention.
</summary>


**Answer:**

* **Block** → independent component
* **Element** → child of block
* **Modifier** → variation

Example:

```css
card__title--large
```

👉 Easy to debug & reuse

</details>

<details>
  <summary> 
Q28. Difference between <strong>:is()</strong> and <strong>:where()</strong> selectors?
</summary>


**Answer:**

* `:is()` → **takes highest specificity**
* `:where()` → **zero specificity**

👉 `:where()` is safer for global styles

</details>

<details>
  <summary> 
Q29. What are the risks of global CSS?
</summary>

**Answer:**

* Style leakage
* Unintended overrides
* Hard debugging

👉 Solved by scoped CSS, modules, or naming conventions

</details>

<details>
  <summary> 
Q30. What is <strong>:has()</strong> selector and why is it powerful?
</summary>


**Answer:**

* Parent selector
* Styles element based on its children

Example:

```css
div:has(img) { border: 1px solid; }
```

👉 Enables logic without JavaScript

</details>

<details>
  <summary> 
Q31. Why is <strong>100vh</strong> problematic on mobile browsers?
</summary>



**Answer:**

* Includes browser UI (address bar)
* Causes content cut-off or extra scroll

👉 Fix:

* Use `dvh`, `svh`, `lvh`
* Or JavaScript-based height fix

</details>

<details>
  <summary> 
Q32. Difference between <strong>vw</strong> and <strong>%</strong>?
</summary>


**Answer:**

* `vw` → relative to **viewport width**
* `%` → relative to **parent element**

👉 `%` is layout-safe, `vw` is viewport-based

</details>

<details>
<summary>Q33. What are <strong>container</strong> queries and why are they better than <strong>media</strong> queries?
  </summary> 

**Answer:**

* Styles depend on **parent size**, not viewport
* Enable truly reusable components

Example:

```css
@container (min-width: 400px) { }
```

👉 Solves component-based responsiveness

</details>

<details>
  <summary> 
Q34. Common media query mistakes?
</summary>

**Answer:**

* Overusing breakpoints
* Designing only for device sizes
* Ignoring content-based breakpoints

👉 Design should adapt to content, not devices

</details>

<details>
  <summary> 
Q35. How do you handle responsive images in CSS?
</summary>


**Answer:**

* Use `max-width: 100%`
* Use `object-fit`
* Use `srcset` with HTML images

👉 Prevents image overflow

</details>

<details>
  <summary> 
Q36. What are CSS variables and why are they better than preprocessor variables?
</summary>


**Answer:**

* Defined using `--variable-name`
* Can be changed **at runtime**
* Inherit through DOM

```css
/* Declare a CSS Variable */
--variable-name: value;

/* Declare Variable Globally */
:root {
  --primary-color: #3498db;
  --font-size: 16px;
}
/* Use it like this: */
body {
  color: var(--primary-color);
  font-size: var(--font-size);
}

```

👉 Preprocessor variables (Sass) are **compile-time only**

</details>

<details>
  <summary> 
Q37. How do you implement dark mode using CSS?
</summary>


**Answer:**

* Use CSS variables
* Toggle class or use media query

Example:

```css
/* Step 1: Define variables */
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

.dark {
  --bg-color: #121212;
  --text-color: #ffffff;
}

/* Step 2: Use variables */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
/* Step 3: Toggle class with JavaScript */
document.body.classList.toggle("dark");

```

👉 Clean & scalable approach

</details>

<details>
  <summary> Q38. What is <strong>prefers-color-scheme</strong>?
</summary>


**Answer:**

* Detects system theme (dark/light)
* Used for automatic theming

Example:

```css
/* Default (Light Mode) */
body {
  background-color: #ffffff;
  color: #000000;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #ffffff;
  }
}

```

</details>

<details>
  <summary> 
Q39. Can CSS variables be used inside media queries?
</summary>


**Answer:**
❌ No, but they **can be changed inside media queries**

👉 Important interview trap question

</details>

<details>
  <summary> 
Q40. How do CSS variables help performance?
</summary>


**Answer:**

* Reduce duplicated CSS
* Avoid reflow-heavy recalculations
* Enable efficient theming
</details>

<details>
  <summary> 
Q41. Why should <strong>outline: none</strong> be avoided?
</summary>


**Answer:**

* Removes keyboard focus visibility
* Breaks accessibility (a11y)

👉 Replace with custom focus styles instead


</details>

<details>
  <summary> 
Q42. Difference between <strong>display: none</strong> and <strong>aria-hidden="true"</strong>?
</summary>

**Answer:**

* `display: none` → hidden visually & from screen readers
* `aria-hidden` → hidden only from assistive tech

👉 Used together in accessibility-sensitive UI

</details>

<details>
  <summary> 
Q43. What does <strong>pointer-events: none</strong> do?
</summary>


**Answer:**

* Disables mouse interactions
* Click passes through element

👉 Common in loaders & overlays

</details>

<details>
  <summary> 
Q44. What is <strong>user-select</strong> used for?
</summary>

**Answer:**

* Controls text selection
* Values: `none`, `text`, `all`

👉 Used to prevent copy in UI elements

</details>

<details>
  <summary> 
Q45. How do you create accessible hover effects?
</summary>


**Answer:**

* Combine `:hover` with `:focus-visible`
* Never rely on color alone

👉 Keyboard users matter
</details>

# JS-DOM


<details>
  <summary> Difference between Node, Element and HTMLElement?
</summary>

**Answer**

- `Node` is the base interface for everything in the DOM.
- `Element` is a node that represents an HTML or XML tag. 
- `HTMLElement` is a specialized element interface specific to HTML elements.
