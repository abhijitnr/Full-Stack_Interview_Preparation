# 1. What is HTML ?

<p>
HTML stands for Hypertext Markup Language and it is a markup language used for creating web pages and other information that can be displayed in a web browser. It is the standard language used to structure content on the World Wide Web and is essential for creating web pages that are accessible and readable by users.
</p>
<p>
HTML uses tags, which are enclosed in angle brackets, to define the structure and content of a web page. These tags indicate how the content should be displayed in a browser, such as headings, paragraphs, links, images, tables, and forms. HTML also allows web developers to include other media, such as videos, audio, and animations, within web pages.
</p>

# 2. What are HTML tags?

<p>
HTML tags are the building blocks of HTML, and they define the structure and content of a web page. They are enclosed in angle brackets and consist of a tag name, which indicates the type of element being defined, and optional attributes, which provide additional information about the element.
</p>

For example, the `<p>` tag is used to define a paragraph of text, and the `<img>` tag is used to insert an image into a web page.

Here is an example of a paragraph tag: `<p>This is a paragraph of text.</p>`
In this example, the `<p>` tag defines the beginning of a paragraph, and the `</p>` tag defines the end of the paragraph.

<p>
HTML tags can be nested inside each other to create more complex structures, such as tables, lists, and forms. The way these tags are structured and nested determines the layout and appearance of a web page.
</p>

# 3. What are HTML Attributes?

<p>
HTML attributes are additional properties that can be added to HTML elements to provide extra information about the element. They are used to modify the behavior or appearance of an HTML element, or to provide additional information about the element to search engines, browsers, or other software that may process the web page.
</p>

<p>
HTML attributes are specified in the opening tag of an HTML element, using the attribute name followed by an equals sign and the attribute value enclosed in quotes. For example, the "href" attribute is used to specify the URL of a link, and the "alt" attribute is used to provide alternative text for an image.
</p>

Here is an example of an HTML anchor tag with an "href" attribute: `<a href="https://example.com">Visit Example</a>`

# 4. What are HTML Elements?

<p>
HTML elements are the building blocks of a web page. An HTML element is represented by a tag in the HTML code and is used to define the structure and content of a web page. There are different types of HTML elements, each with its own purpose.
</p>

<p>
Some common HTML elements include: Headings, Paragraphs, Links, Images, Lists, Forms etc.
</p>

# 5. What is a marquee in HTML?

The `<marquee>` tag in HTML is used to create a scrolling text or image display in a web page. The marquee tag was introduced in HTML 3.2 and has been deprecated in HTML5, which means it is no longer recommended for use, as it is not part of the modern web standards.

The `<marquee>` tag has several attributes that can be used to customize its behavior, such as direction, behavior, scroll amount, and scroll delay. The direction attribute specifies the direction of the scrolling, which can be either "left", "right", "up", or "down". The behavior attribute specifies the behavior of the scrolling, which can be "scroll", "slide", or "alternate".

Here is an example of how to use the `<marquee>` tag: `<marquee direction="left" behavior="scroll" scrollamount="5">This text will scroll from left to right</marquee>`

However, it is recommended to avoid using the `<marquee>` tag in modern web development, as it can negatively affect the accessibility and usability of a website. Instead, other technologies such as CSS animations or JavaScript can be used to achieve similar effects in a more modern and accessible way.

# 6. Define the list types in HTML?

In HTML , there are three types of lists: ordered, unordered and definition list.

- <b>Unordered Lists :</b> An unordered list is a list of items that are marked with bullet points (or some other marker) to indicate each item. The unordered list is created using the `<ul>` tag, and each item in the list is created using the `<li>` tag. Here is an example:
  <br/>
  `<ul>`
  <br/>
  `<li>Item 1</li>`
  <br/>
  `<li>Item 2</li>`
  <br/>
  `<li>Item 3</li>`
  <br/>
  `</ul>`

- <b>Ordered Lists :</b> An ordered list is a list of items that are numbered to indicate each item's order. The ordered list is created using the `<ol>` tag, and each item in the list is created using the `<li>` tag. Here is an example:
  <br/>
  `<ol>`
  <br/>
  `<li>First Item</li>`
  <br/>
  `<li>Second Item</li>`
  <br/>
  `<li>Third Item</li>`
  <br/>
  `</ol>`

In both types of lists, you can nest other lists and other HTML elements inside each list item by using the appropriate tags. It's also possible to change the appearance of the list markers or numbers by using CSS.

- <b>Definition list :</b> a definition list is a list of terms and their corresponding definitions. It is created using the `<dl>` tag, and each term and definition pair is created using the `<dt>` and `<dd>` tags, respectively.Here is an example of a definition list:
  <br/>
  `<dl>`
  <br/>
  `<dt>HTML</dt>`
  <br/>
  `<dd>Hypertext Markup Language - the standard markup language used to create web pages.</dd>`
  <br/>
  `<dt>CSS</dt>`
  <br/>
  `<dd>Cascading Style Sheets - the language used to describe the presentation of web pages.</dd>`
  <br/>
  `<dt>JavaScript</dt>`
  <br/>
  `<dd>A programming language used to create interactive and dynamic web pages.</dd>`
  <br/>
  `</dl>`

n the example above, each term (HTML, CSS, and JavaScript) is defined using the `<dt>` tag, and its corresponding definition is provided using the `<dd>` tag.

<p>
Definition lists are commonly used to present glossary or dictionary-like information on a web page. They can also be styled using CSS to enhance their appearance and readability.
</p>

# 7. What is formatting in HTML?

<p>
In HTML, formatting refers to the visual presentation of text and other content on a web page. Formatting can be applied to HTML elements to change their appearance, size, color, font, and other properties.
</p>

<p>
HTML provides several formatting elements and attributes to help developers control the appearance of their web pages. Here are some of the most commonly used formatting elements:
</p>

- Headings - HTML provides six levels of headings (h1 to h6) that can be used to create titles and headings of different sizes.
- Paragraphs - The `<p>` tag is used to create paragraphs of text.
- Bold and italic - The `<b>` tag is used to make text bold, while the `<i>` tag is used to make text italic.
- Underline - The `<u>` tag is used to underline text.
- Strikethrough - The `<s>` or `<strike>` tag is used to create text with a line through it.
- Font size and color - The `<font>` tag can be used to specify the font size and color of text.

It's important to note that some formatting elements, such as the `<font>` tag, are now deprecated in HTML5 and should be avoided. Instead, modern web development practices rely on Cascading Style Sheets (CSS) to apply formatting and styles to HTML elements.
