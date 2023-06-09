---
title: "How native CSS is finally catching up with what we've been doing for years now"
description: "An exploration into how modern CSS can potentially replace preprocessors like SCSS by bringing logic, nesting, and dynamic variables directly into the browser. Learn to leverage a \"native-first\" workflow that reduces build-tool dependency and improves runtime performance."
date: 2025-12-29
tags: ["Web Development", "CSS"]
---

For over a decade, SCSS was the industry’s "must-have" tool, bridging the gap between what developers needed and what browsers could actually do. We relied on it for logical nesting, variables, and complex selectors. But here at the back end of 2025, the gap has closed.

As of the time of writing, the CSS spec has absorbed the best parts of preprocessors and added features, like runtime logic and relational selectors, that SCSS simply cannot replicate. Transitioning to a **native-first** approach isn't just about removing a build step; it’s about writing CSS that is more performant, easier to debug in DevTools, and capable of responding to the live state of your application.

---

## 1. Custom properties & the power of @property

Introduced as basic variables in 2014; `@property` (Typed Properties) became Baseline in 2024/2025.

Unlike SCSS variables, which are static values swapped out during compilation, CSS Custom Properties are dynamic. They live in the browser, meaning they can be inherited, overridden in specific scopes, and updated via JavaScript. By using `@property`, we can now "type" these variables, telling the browser exactly what kind of data they hold so it can perform complex animations.

```css
/* 1. Global Tokens in the :root */
:root {
  --brand-primary: #007bff; /* Globally accessible */
  --spacing-unit: 1rem;
}

/* 2. Defining a Typed Property */
/* This tells the browser --gradient-angle IS a number/angle, not just a string */
@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.hero-section {
  /* Unlike SCSS, this variable can now be smoothly transitioned */
  background: linear-gradient(var(--gradient-angle), var(--brand-primary), #6f42c1);
  transition: --gradient-angle 0.5s ease;
}

.hero-section:hover {
  --gradient-angle: 180deg; /* The browser interpolates the rotation automatically */
}

```

---

## 2. Inline Logic with if()

**Introduced:** CSS Values and Units Module Level 5 (Widely implemented 2025/2026).

The `if()` function is a paradigm shift. Historically, if you wanted a "Dark Mode" button, you’d need two different CSS classes or a complex SCSS mixin. Now, we have a native ternary operator. This allows for "branching" logic within a single declaration based on the state of a custom property.

```css
.button {
  /* Define a local state variable */
  --high-contrast: off;

  /* Inline logic: if(condition : value; else: fallback) */
  /* This eliminates the need for multiple 'modifier' classes like .btn--large */
  border: if(style(--high-contrast: on): 3px solid black; else: 1px solid transparent);
  
  /* Reactive theming within a single rule */
  background: if(style(--theme: dark): #222; else: #eee);
  color: if(style(--theme: dark): white; else: black);
}

```

Some people have criticised this feature as being too busy and unnecessarily verbose; especially in the context of using an `if()` as a replacement for a media query. However, I find when used in small, logical chunks, it can be a powerful tool.

---

## 3. Relational Logic: :has() and :not()

My favorite new additions to CSS! `:not()` and `:has()` are baseline features as of 2023/2024.

The `:has()` selector is the "holy grail" of CSS selectors. Often called the "Parent Selector", it allows you to style an element based on its children or the elements that follow it. Because SCSS is a preprocessor, it cannot "know" what is in the DOM - it only knows the nesting structure of your source code. `:has()` gives CSS real-time situational awareness.

```css
/* 1. The Parent Selector */
/* Style the card container ONLY if it contains a 'sale' badge */
.card:has(.sale-badge) {
  border: 2px solid gold;
  transform: scale(1.05);
}

/* 2. The 'Look Ahead' Logic */
/* Select a Paragraph only if the VERY NEXT element is a List */
/* This allows us to remove bottom margin so the text 'hugs' the list */
p:has(+ ul) {
  margin-bottom: 0.25rem;
  font-weight: 600;
  color: var(--brand-primary);
}

/* 3. Combined Negation */
/* When hovering the grid, dim every card EXCEPT the one being hovered */
.card-grid:hover .card:not(:hover) {
  opacity: 0.6;
  filter: grayscale(1);
}

```

You could argue that this is a more specific `if()` selector, and I would agree. Using the example above, `if .card has .sale-badge then ...` is essentially what it's doing. 

---

## Native CSS Nesting
This one knocked me back a bit. This was added as a baseline feature in 2023! Yet, here I am at the back end of 2025 learning it exists - purely down to the fact that the codebase I work on is almost entirely centred around SCSS.

Native nesting is probably the biggest addition to the spec that negates the need for _most_ people's use of SCSS. It allows you to group your component properties just as you would in SCSS, using the `&` symbol to reference the parent.

However, it's not without its quirks. Unlike SCSS, which flattens nesting at build time, native CSS nesting is resolved by the browser. The end result is the same flat selectors, but there is a major catch for SCSS users: **native CSS does not support identifier concatenation**.

In SCSS, you can use `&__element` or `&--modifier` to "build" a BEM class name. In native CSS, the `&` represents the entire selector as a reference; it cannot be glued to another string. If you try to concatenate in native CSS, the browser simply won't recognise it.

### The Real-World Difference
While it simplifies selectors by removing the need to re-type the parent, you have to write out full class names for modifiers.

```css
/* Native CSS nesting */
.nav-menu {
  display: flex;
  gap: 1rem;

  /* This works for descendants */
  & .nav-item {
    color: var(--brand-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #0056b3;
    }
  }

  /* ❌ THIS FAILS in native CSS (Concatenation) */
  &--left { 
    justify-content: flex-start; 
  }

  /* ✅ THIS WORKS (Standard Nesting) */
  &.nav-menu--left {
    justify-content: flex-start;
  }
}
```

This would be interpreted by the browser as:

```css
.nav-menu {
  display: flex;
  gap: 1rem;
}

.nav-menu .nav-item {
  color: var(--brand-primary);
  text-decoration: none;
}

.nav-menu .nav-item:hover {
  text-decoration: underline;
  color: #0056b3;
}

.nav-menu.nav-menu--left {
  justify-content: flex-start;
}
```

For simplifying hierarchy and pseudo-states, it’s great, but, BEM purists will need to adjust their workflow.

For simplifying selectors like this though, it's great!

---

### Comparison: Native vs. SCSS

| Feature | Native CSS | SCSS (The Old Way) |
| --- | --- | --- |
| **Logic** | Responds to user interaction & JS. | Fixed once the CSS is generated. |
| **Variables** | Can be changed in media queries. | Needs separate overrides for every breakpoint. |
| **Debugging** | See nesting/variables in DevTools. | Only see the final, flattened CSS. |
| **Build Time** | No compiler or watcher needed. | Requires Node.js/Sass to run in background. |
