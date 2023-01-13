# MY HTML5 PREPARATION

## 1) What is HTML?

HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links.

## 2) What are Tags?

HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags.

HTML documents contain two things:

- content, and
- tags

When a web browser reads an HTML document, the browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.

Syntax
`<tag> content </tag>`

Content is placed between tags to display data on the web page.

## 3) Do all HTML tags have an end tag?

No. There are some HTML tags that don't need a closing tag. For example: `<image>` tag, `<br>` tag.

## 4) What is formatting in HTML?

The HTML formatting is a process of format the text for a better look and feel. It uses different tags to make text bold, italicized, underlined.

## 5) How many types of heading does an HTML contain?

The HTML contains six types of headings which are defined with the `<h1>` to `<h6>` tags. Each type of heading tag displays different text size from another. So, `<h1>` is the largest heading tag and `<h6>` is the smallest one. For example:

- `<h1>Heading no. 1</h1>`
- `<h2>Heading no. 2</h2>`
- `<h3>Heading no. 3</h3>`
- `<h4>Heading no. 4</h4>`
- `<h5>Heading no. 5</h5>`
- `<h6>Heading no. 6</h6>`

## 6) How to create a hyperlink in HTML?

The HTML provides an anchor tag to create a hyperlink that links one page to another page. These tags can appear in any of the following ways:

- Unvisited link - It is displayed, underlined and blue.
- Visited link - It is displayed, underlined and purple.
- Active link - It is displayed, underlined and red.

## 7) Which HTML tag is used to display the data in the tabular form?

The HTML table tag is used to display data in tabular form (row \* column). It also manages the layout of the page, e.g., header section, navigation bar, body content, footer section. Here is the list of tags used while displaying the data in the tabular form:

- ![](./assets/htmlTable.png)

## 8) What are some common lists that are used when designing a page?

There are many common lists which are used to design a page. You can choose any or a combination of the following list types:

- Ordered list - The ordered list displays elements in numbered format. It is represented by `<ol>` tag.
- Unordered list - The unordered list displays elements in bulleted format. It is represented by `<ul>` tag.
- Definition list - The definition list displays elements in definition form like in dictionary. The `<dl>`, `<dt>` and `<dd>` tags are used to define description list.

## 9) What is the difference between HTML elements and tags?

HTML elements communicate to the browser to render text. When the elements are enclosed by brackets <>, they form HTML tags. Most of the time, tags come in a pair and surround content.

## 10) What is semantic HTML?

Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML `<b> </b>` tag is not used for bold statement as well as `<i> </i>` tag is used for italic. Instead of these we use `<strong> </strong>` and `<em> </em>` tags.

## 11) What is an image map?

Image map facilitates you to link many different web pages using a single image. It is represented by `<map>` tag. You can define shapes in images that you want to make part of an image mapping.

## 12) How to insert a copyright symbol on a browser page?

You can insert a copyright symbol by using `&copy;` or `&#169;` in an HTML file.

## 13) How to create a nested webpage in HTML?

The HTML iframe tag is used to display a nested webpage. In other words, it represents a webpage within a webpage. The HTML `<iframe>` tag defines an inline frame. For example:

```
<!DOCTYPE html>
<html>
<body>
<h2>HTML Iframes example</h2>
<p>Use the height and width attributes to specify the size of the iframe:</p>
<iframe src="https://www.javatpoint.com/" height="300" width="400"></iframe>
</body>
</html>
```

## 14) How do you keep list elements straight in an HTML file?

You can keep the list elements straight by using indents.

## 15) Does a hyperlink only apply to text?

No, you can use hyperlinks on text and images both. The HTML anchor tag defines a hyperlink that links one page to another page. The "href" attribute is the most important attribute of the HTML anchor tag.

Syntax
`<a href = "..........."> Link Text </a>`

## 16) What is a style sheet?

A style sheet is used to build a consistent, transportable, and well-designed style template. You can add these templates on several different web pages. It describes the look and formatting of a document written in markup language.

## 17) Can you create a multi-colored text on a web page?

Yes. To create a multicolor text on a web page you can use `<font color ="color"> </font>` for the specific texts you want to color.

## 18) Is it possible to change the color of the bullet?

The color of the bullet is always the color of the first text of the list. So, if you want to change the color of the bullet, you must change the color of the text.

## 19) Explain the layout of HTML?

HTML layout specifies a way in which the web page is arranged.

- ![](./assets/html-layouts.png)

Every website has a specific layout to display content in a specific manner.

Following are different HTML5 elements which are used to define the different parts of a webpage.

- `<header>`: It is used to define a header for a document or a section.
- `<nav>`: It is used to define a container for navigation links
- `<section>`: It is used to define a section in a document
- `<article>`: It is used to define an independent, self-contained article
- `<aside>`: It is used to define content aside from the content (like a sidebar)
- `<footer>`: It is used to define a footer for a document or a section

## 20) What is a marquee?

Marquee is used to put the scrolling text on a web page. It scrolls the image or text up, down, left or right automatically. You should put the text which you want to scroll within the `<marquee>......</marquee>` tag.

## 21) How many tags can be used to separate a section of texts?

Three tags are used to separate the texts.

- `<br>` tag - Usually `<br>` tag is used to separate the line of text. It breaks the current line and conveys the flow to the next line
- `<p>` tag - The `<p>` tag contains the text in the form of a new paragraph.
- `<blockquote>` tag - It is used to define a large quoted section. If you have a large quotation, then put the entire text within `<blockquote>.............</blockquote>` tag.

## 22) How to make a picture of a background image of a web page?

To make a picture a background image on a web page, you should put the following tag code after the `</head>` tag.

`<body background = "image.gif">`  
Here, replace the "image.gif" with the name of your image file which you want to display on your web page.

## 23) What are empty elements?

HTML elements with no content are called empty elements. For example: `<br>`, `<hr>` etc.

## 24) What is the use of a span tag? Give one example.

The span tag is used for following things:

- For adding color on text
- For adding background on text
- Highlight any color text
  Example:

```
<p>
<span style="color:#ffffff;">
In this page we use span.
</span>
</p>
```

## 25) What is the use of an iframe tag?

An iframe is used to display a web page within a web page.

Syntax:

`<iframe src="URL"></iframe>`  
Example:

```
<iframe src="demo_iframe.html" width="200px" height="200px"></iframe>
```

Target to a link:

```
<iframe src="http://www.javatpoint.com" name="iframe_a"></iframe>
```

## 26) What are the entities in HTML?

The HTML character entities are used as a replacement for reserved characters in HTML. You can also replace characters that are not present on your keyboard by entities. These characters are replaced because some characters are reserved in HTML.

## 27) Why is a URL encoded in HTML?

An URL is encoded to convert non-ASCII characters into a format that can be used over the Internet because a URL is sent over the Internet by using the ASCII character-set only. If a URL contains characters outside the ASCII set, the URL has to be converted. The non-ASCII characters are replaced with a "%" followed by hexadecimal digits.

## 28) Does a `<!DOCTYPE html>` tag is a HTML tag?

No, the `<!DOCTYPE html>` declaration is not an HTML tag. There are many type of HTML e.g. HTML 4.01 Strict, HTML 4.01 Transitional, HTML 4.01 Frameset, XHTML 1.0 Strict, XHTML 1.0 Transitional, XHTML 1.0 Frameset, XHTML 1.1 etc. So, `<!DOCTYPE html>` is used to instruct the web browser about the HTML page.

## 29) What is the canvas element in HTML5?

The `<canvas>` element is a container that is used to draw graphics on the web page using scripting language like JavaScript. It allows for dynamic and scriptable rendering of 2D shapes and bitmap images. There are several methods in canvas to draw paths, boxes, circles, text and add images. For Example:

```
<canvas id="myCanvas1" width="300" height="100" style="border:2px solid;">
Your browser does not support the HTML5 canvas tag.
</canvas>
```

## 30) What is SVG?

HTML SVG is used to describe the two-dimensional vector and vector/raster graphics. SVG images and their behaviors are defined in XML text files. So as XML files, you can create and edit an SVG image with the text editor. It is mostly used for vector type diagrams like pie charts, 2-Dimensional graphs in an X, Y coordinate system.

```
<svg width="100" height="100">
 <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="red" />
</svg>
```

## 31) What are the different new form element types in HTML 5?

Following is a list of 10 frequently used new elements in HTML 5:

- Color
- Date
- Datetime-local
- Email
- Time
- Url
- Range
- Telephone
- Number
- Search

## 32) Is there any need to change the web browsers to support HTML5?

No. Almost all browsers (updated versions) support HTML 5. For example Chrome, Firefox, Opera, Safari, IE.

## 33) Which type of video formats are supported by HTML5?

HTML 5 supports three types of video format:

- mp4
- WebM
- Ogg

## 34) Is audio tag supported in HTML 5?

Yes. It is used to add sound or music files on the web page. There are three supported file formats for HTML 5 audio tag.

- mp3
- WAV
- Ogg
  Let's see the code to play mp3 file using HTML audio tag.

```
<audio controls>
<source src="koyal.mp3" type="audio/mpeg">
Your browser does not support the html audio tag.
</audio>
```

Instead of koyal.mp3, you can pass any mp3 file name.

## 35) What is the difference between progress and meter tag?

The progress tag is used to represent the progress of the task only while the meter tag is used to measure data within a given range.

## 36) What is the use of figure tag in HTML 5?

The figure tag is used to add a photo in the document on the web page. It is used to handle the group of diagrams, photos, code listing with some embedded content.

`<p>`The Taj Mahal is widely recognized as "the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."`</p>`

```
<figure>
  <img src="htmlpages/images/tajmahal.jpg" alt="Taj Mahal"/>
</figure>
```

## 37) What is the use of figcaption tag in HTML 5?

The `<figcaption>` element is used to provide a caption to an image. It is an optional tag and can appear before or after the content within the `<figure>` tag. The `<figcaption>` element is used with `<figure>` element and it can be placed as the first or last child of the `<figure>` element.

```
<figure>
<img src="htmlpages/images/tajmahal.jpg" alt="Taj Mahal"/>
<figcaption>Fig.1.1 - A front view of the great Taj Mahal in Agra.</figcaption>
</figure>
```

## 38) What is button tag?

The button tag is used in HTML 5. It is used to create a clickable button within the HTML form on the web page. It is generally used to create a "submit" or "reset" button. Let's see the code to display the button.

```
<button name="button" type="button">Click Here</button>
```

## 39) What is the use of details and summary tag?

The details tag is used to specify some additional details on the web page. It can be viewed or hidden on demand. The summary tag is used with details tag.

## 40) What is datalist tag?

The HTML 5 datalist tag provides an autocomplete feature on the form element. It facilitates users to choose the predefined options to the users to select data.

```
<label>
Enter your favorite cricket player: Press any character<br />
<input type="text" id="favCktPlayer" list="CktPlayers">
<datalist id="CktPlayers">
<option value="Sachin Tendulkar">
<option value="Brian Lara">
<option value="Jacques Kallis">
<option value="Ricky Ponting">
<option value="Rahul Dravid">
<option value="Shane Warne">
<option value="Rohit Sharma">
<option value="Donald Bradman">
<option value="Saurav Ganguly ">
<option value="AB diVilliers">
<option value="Mahendra Singh Dhoni">
<option value="Adam Gilchrist">
</datalist>
</label>
```

## 41) How are tags migrated from HTML4 to HTML5?

![](./assets/html4to5.png)
Header and Footer Example

- **HTML 4 Header and Footer:**

```
<div id="header">
  <h1>Monday Times</h1>
</div>
.
.
.
<div id="footer">
  <p>&copy; JavaTpoint. All rights reserved.</p>
</div>
```

- **HTML 5 Header and Footer:**

```
<header>
  <h1>Monday Times</h1>
</header>
.
.
.
<footer>
  <p>© JavaTpoint. All rights reserved.</p>
</footer>
```

Menu Example

- **HTML 4 Menu:**

```
<div id="menu">
  <ul>
    <li>News</li>
    <li>Sports</li>
    <li>Weather</li>
  </ul>
</div>
```

- **HTML 5 Menu:**

```
<nav>
  <ul>
    <li>News</li>
    <li>Sports</li>
    <li>Weather</li>
  </ul>
</nav>
```

## 42) If I do not put <!DOCTYPE html> will HTML 5 work?

No, the browser will not be able to identify that it is an HTML document and HTML 5 tags do not function properly.

## 43) What is the use of the required attribute in HTML5?

It forces a user to fill text on the text field or text area before submitting the form. It is used for form validation.

Example:

Name: `<input type="text" name="name" required>`

## 44) What are the new `<input>` types for form validation in HTML5?

The new input types for form validation are email, URL, number, tel, and date.

Example:
`<input type="email">`
