<h1>CSS Interview Questions and Answers</h1>

# 1. What is CSS?

CSS stands for Cascading Style Sheets. It is a programming language used for describing the look and formatting of a document written in markup languages like HTML or XML. CSS defines how the content of a web page is displayed, including elements such as font size, color, layout, and spacing.

CSS separates the presentation of a web page from its content, making it easier to make changes to the appearance of a website without altering the underlying HTML code. With CSS, web designers and developers can create attractive and professional-looking websites that are consistent across different web browsers and devices.

CSS works by selecting HTML elements and applying specific styles to them. For example, a CSS rule might define that all paragraphs on a web page have a font size of 14 pixels and a line height of 1.5. CSS can also be used to create animations, responsive designs that adapt to different screen sizes, and other advanced features for web development.

# 2. How can you integrate CSS on a web page?

There are several ways to integrate CSS on a web page:

- External CSS: This is the most common method of integrating CSS into a web page. In this method, you create a separate CSS file with all your styles and link it to your HTML document using the `<link>` tag in the `<head>` section of the HTML document. For example,

  ```
  <link rel="stylesheet" href="styles.css">
  ```

- Internal CSS: This method involves adding your CSS styles directly in the HTML document using the `<style>` tag in the `<head>` section of the HTML document. For example,

  ```
  <style> p {color: red;} </style>
  ```

- Inline CSS: This method involves adding CSS styles directly to individual HTML elements using the style attribute. For example,
  ```
  <p style="color: red;">This text is red.</p>
  ```

It is important to note that the best practice is to use the external CSS method for most situations, as it separates the presentation of the website from the content, making it easier to maintain and update.

# 3.
