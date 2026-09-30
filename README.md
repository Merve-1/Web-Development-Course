# 🌐 HTML Fundamentals

This branch contains learning materials and examples for **HTML (HyperText Markup Language)** — the foundation of web development. It covers core concepts, common elements, semantic structure, and best practices for building well-structured web pages.

---

## 📌 Topics Covered

### 🧱 Basic Elements

* Text content
* Images
* Links
* Structure of an HTML element

---

### 🧾 Lists, Tables, and Forms

* Tables:

  * `<table>`, `<tr>`, `<th>`, `<td>`
  * Semantic structure: `<thead>`, `<tbody>`
* Forms:

  * `<form>`, `<input>`, and related elements
  * User input handling and basic validation

---

### 🎨 Styling Basics

* Inline styling concepts:

  * `color`
  * `background-color`
  * `font` properties

---

### 🎥 Multimedia

* Embedding media:

  * `<video>`
  * `<audio>`

---

### 🧩 Semantic HTML

Semantic tags describe the meaning of content:

* `<header>` – page or section header
* `<aside>` – sidebar or secondary content (e.g., related links, ads)  
* `<nav>` – navigation links
* `<main>` – main content of the page (used once per page)
* `<section>` – grouped content
* `<article>` – independent content
* `<figure>` – container for media (image, diagram, code snippet)  
* `<figcaption>` – caption for a `<figure>` element  
* `<time>` – represents a date or time  
* `<abbr>` – abbreviation with a full meaning  
* `<cite>` – title of a work (book, article, etc.)  
* `<q>` – inline quotation  
* `<blockquote>` – block-level quotation  
* `<code>` – inline code snippet  
* `<pre>` – preformatted text (keeps spacing and line breaks)  
* `<kbd>` – keyboard input (e.g., Ctrl + C)  
* `<samp>` – output from a program  
* `<label>` – label for form inputs  
* `<fieldset>` – groups related form elements  
* `<legend>` – title for a `<fieldset>`  
* `<progress>` – progress indicator  
* `<meter>` – measurement value (e.g., disk usage)
* `<footer>` – footer section

These improve:

* Readability
* Accessibility
* SEO performance

---

### 🧭 Heading Hierarchy (SEO Important)

Heading structure should follow a logical order:

* `<h1>` → Main title (use once per page)
* `<h2>` → Main sections
* `<h3>` → Subsections
* `<h4>` → Additional depth
* `<h5>` / `<h6>` → Rarely used deeper levels

**Why it matters:**

* Helps search engines understand content structure
* Improves accessibility
* Enhances readability

---

### 🧾 Text Formatting Tags

Common formatting elements:

* `<b>` – Bold (visual only)
* `<strong>` – Strong importance (semantic)
* `<i>` – Italic (visual)
* `<em>` – Emphasis (semantic)
* `<u>` – Underline
* `<mark>` – Highlight text
* `<del>` – Deleted text
* `<ins>` – Inserted text
* `<sub>` – Subscript (e.g., H₂O)
* `<sup>` – Superscript (e.g., x²)

---

### 🧱 Division Element (`<div>`)

* Acts as a container (box) for grouping elements
* Commonly used for layout and styling
* Helps organize content into sections

---

### 🆔 ID vs Class

**ID (`id`)**

* Unique identifier (only one per page)
* Used for targeting specific elements

**Class (`class`)**

* Reusable across multiple elements
* Used for grouping and styling

| Feature      | ID               | Class                    |
| ------------ | ---------------- | ------------------------ |
| Uniqueness   | Unique           | Can repeat               |
| CSS selector | `#id`            | `.class`                 |
| JS usage     | `getElementById` | `getElementsByClassName` |

---

### 📊 Tables Structure Example

```html
<table>
  <thead>
    <tr>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
    </tr>
  </tbody>
</table>
```


---

## 🎯 Learning Goals

By the end of this section, you should be able to:

* Build structured HTML pages from scratch
* Use semantic tags correctly
* Create forms, tables, and multimedia content
* Understand heading hierarchy and SEO basics
* Organize content using IDs and classes
* Prepare HTML for styling with CSS and interactivity with JavaScript

---
