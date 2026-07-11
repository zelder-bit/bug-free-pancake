# bug-free-pancake
calculator

This project is to round off the foundations section of the Odin Project.

This will be a usable calculator. I want to try for a gruvbox-esque theme too, but we'll see I may just want to move on before that.

## Calculator Implementation

I've been working on implementing a stack-based calculator approach for parsing mathematical expressions. This approach uses two stacks:
- One for operands (numbers)
- One for operators (+, -, *, /, etc.)

The stack-based method elegantly handles operator precedence and parentheses without requiring complex recursive parsing.

## Implementation Approach

The core idea is to parse the input expression character by character and use the stack data structure to manage:
1. How operators interact with each other based on precedence
2. How parentheses affect the order of operations
3. The evaluation process for mathematical expressions

## Next Steps

The calculator should be able to handle expressions like:
- `3 + 4 * 2`
- `(1 + 2) * 3`
- Complex nested expressions with proper precedence handling

This project uses a stack-based approach for parsing and evaluation, which is efficient and handles complex mathematical expressions correctly.
