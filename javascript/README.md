<h1>JavaScript Interview Questions and Answers</h1>

# 1. What do you mean by Execution Context in JavaScript?

In JavaScript, an execution context is an abstract concept of an environment where the Javascript code is evaluated and executed. Whenever any code is run in JavaScript, it's run inside an execution context.

The Execution Context consists of two components: the `Memory Component` and the `Code Component`.

- `Memory Component` : The memory component contains values and functions organized in key-value pairs.
- `Code Component` : The Code Component is the place where all JavaScript code should be executed.

The memory component is known as the `"variable environment"`, and the code component is known as the `"thread of execution"`.

# 2. What is call stack in JavaScript?

In JavaScript, the call stack is a mechanism used by the JavaScript engine to keep track of the execution context of a running program.

When a function is called, a new execution context is created and pushed onto the call stack. This execution context includes information about the function such as its arguments, local variables, and the location of the code that called the function.

As the function executes, it may call other functions, which in turn create their own execution contexts that are also pushed onto the call stack. Each new function call adds a new execution context to the top of the stack.

When a function completes its execution, its execution context is popped off the stack, and control is returned to the function that called it. This continues until the entire program has executed.

The call stack has a finite size, and if too many functions are called, it can result in a stack overflow error. This can occur if a function calls itself recursively without a base case to stop the recursion.

Understanding the call stack is important for debugging JavaScript programs, as it can help identify the sequence of function calls that led to a particular error.
