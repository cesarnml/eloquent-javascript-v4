# Eloquent JavaScript by Marijn Haverbeke

## Table of Contents

- [Eloquent JavaScript by Marijn Haverbeke](#eloquent-javascript-by-marijn-haverbeke)
  - [Table of Contents](#table-of-contents)
  - [Contents](#contents)
  - [Notes](#notes)
    - [Introduction](#introduction)
    - [Chapter 01: Values, Types and Operators](#chapter-01-values-types-and-operators)
    - [Chapter 02: Program Structure](#chapter-02-program-structure)
    - [Chapter 03: Functions](#chapter-03-functions)

## Contents

- [x] ~~_Introduction_~~ [2024-04-22]
- [x] ~~_Chapter 01: Values, Types and Operators_~~ [2024-04-22]
- [x] ~~_Chapter 02: Program Structure_~~ [2024-04-23]
  - [x] ~~_Exercises_~~ [2024-04-23]
- [x] ~~_Chapter 03: Functions_~~ [2024-04-24]
  - [x] ~~_Exercises_~~ [2024-04-24]

## Notes

### Introduction

- A couple choice quotes from the book's intro:

> "Because computers are dumb ... programming is fundamentally tedious and frustrating."

> "[Programming] is a wonderful game of puzzle solving and abstract thinking."

> "You are fine -- you just need to keep at it."

> "A program is a building of thought."

> "The best programs are those that manage to do something interesting while still being easy to understand."

> "There are many terrible mistakes to make in program design, and you should go ahead and make them at least once so that you understand them. A sense of what a good program looks like is developer with practice, not learned from a list of rules."

> "There are those who will say _terrible_ things about JavaScript. Many of these things are true."

> "JavaScript is ridiculously liberal in what it allows."

- Trivia: ECMAScript6 was released in 2015

[Book Website](https://eloquentjavascript.net)

[Chapter Exercise Code](https://eloquentjavascript.net/code)

### Chapter 01: Values, Types and Operators

- Five of the primitive types in JavaScript:
  - 1. number
    - Three special numbers: `Infinity`, `-Infinity`, `NaN`
    - Trivia: Only `NaN` == `NaN` // false (not equal to itself)
  - 2. string
  - 3. boolean
  - 4. null
  - 5. undefined
- JavaScript uses 64-bits to represent numbers (9e9 positive/negative numbers)
- JavaScript uses 16-bits for strings (which causes emojis to take up two characters 🤦‍♂️)
- Uppercase letters are always less than lowercase letters
- _type coercion_ is the root of all evil

### Chapter 02: Program Structure

- Summary: Most of this chapter involves presenting rather basic and easy to grok aspects of the language syntax.

> "a `do` loop always executes its body at least once, and it starts testing whether it should stop only after that first execution."

> "a program is built out of statements ... statements tend to contain expressions ... you can introduce disturbances in the flow of control by using conditional (`if, else, and switch`) and looping (`while, do, and for`)"

### Chapter 03: Functions

- Summary: This chapter touches on several fundamental concepts surrounding JavaScript `functions`:
  - the concept of purpose (encapsulation and abstraction)
  - the concept of hoisting, binding lexical scope and closure
  - the 3 ways to declare a `function` in JS (`function` keyword statement, expression and arrow function declaration)
  - it also discusses the Call Stack, recursive functions, and premature optimization
  - pure vs side-effect based functions
  - local vs global bindings

> "Functions are a way to structure larger programs, to reduce repetition, ... to isolate [pieces of code from each other]."

> "Functions have `parameters` and a `body`."

> "Each `binding` has a `scope`, the part of the program in which the binding is `visible`."

> "Being able to reference a specific instance of a local binding in an enclosing scope -- is called a `closure`. A function that references bindings from local scopes around it is called a `closure`."

> "A good mental model is to think of a function values as containing both the code in their body and the environment in which they are `created` ... The function body sees the environment in which it was `created`, not the environment in which it is `called`.

- A function that calls itself is called `recursive`
