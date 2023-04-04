<h1>JavaScript Interview Questions and Answers</h1>

# 1. What is JavaScript?

<p>
JavaScript is a high-level, dynamic, and interpreted programming language used primarily for creating interactive web pages and web applications. It is one of the three core technologies used in web development, alongside HTML and CSS. JavaScript code can be embedded directly into HTML documents, and can also be used on the server-side with the help of Node.js.
</p>
<p>
JavaScript was created by Brendan Eich at Netscape in 1995 and was originally called Mocha, then LiveScript before being renamed to JavaScript. It has since become one of the most popular programming languages in the world, used by developers to create dynamic user interfaces, manipulate data, and create complex web applications. It is supported by all modern web browsers, and has a large and active developer community constantly contributing to its growth and evolution.
</p>

# 2. What do you mean by Execution Context in JavaScript?

<p>
In JavaScript, an execution context is an abstract concept of an environment where the Javascript code is evaluated and executed. Whenever any code is run in JavaScript, it's run inside an execution context.
</p>
<p>
The Execution Context consists of two components: the `Memory Component` and the `Code Component`.
</p>

- `Memory Component` : The memory component contains values and functions organized in key-value pairs.
- `Code Component` : The Code Component is the place where all JavaScript code should be executed.

<p>
The memory component is known as the `"variable environment"`, and the code component is known as the `"thread of execution"`.
</p>

# 3. What is call stack in JavaScript?

<p>
In JavaScript, the call stack is a mechanism used by the JavaScript engine to keep track of the execution context of a running program.
</p>
<p>
When a function is called, a new execution context is created and pushed onto the call stack. This execution context includes information about the function such as its arguments, local variables, and the location of the code that called the function.
</p>
<p>
As the function executes, it may call other functions, which in turn create their own execution contexts that are also pushed onto the call stack. Each new function call adds a new execution context to the top of the stack.
</p>
<p>
When a function completes its execution, its execution context is popped off the stack, and control is returned to the function that called it. This continues until the entire program has executed.
</p>
<p>
The call stack has a finite size, and if too many functions are called, it can result in a stack overflow error. This can occur if a function calls itself recursively without a base case to stop the recursion.
</p>
<p>
Understanding the call stack is important for debugging JavaScript programs, as it can help identify the sequence of function calls that led to a particular error.
</p>

# 4. What do you mean by hoisting in JavaScript?

<p>
In JavaScript, hoisting is a mechanism where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the actual execution of the code. This means that regardless of where the declarations appear in the code, they are processed first and become available for use throughout the code.
</p>
Hoisting can occur in two ways:

- Variable Hoisting: In JavaScript, variable declarations with the "var" keyword are automatically hoisted to the top of the current scope. However, only the declaration is hoisted, not the assignment. This means that if you try to access a variable before it has been assigned a value, it will return "undefined".

- Function Hoisting: Function declarations are also hoisted to the top of their respective scope, which means that they can be called before they are defined in the code. This is because the entire function declaration is hoisted, including its name and body. However, function expressions (such as arrow functions and anonymous functions) are not hoisted.

<p>
It is important to note that hoisting can sometimes cause unexpected behavior in your code, so it is best practice to always declare variables and functions at the top of their scope to avoid any potential issues.
</p>

# 5.
