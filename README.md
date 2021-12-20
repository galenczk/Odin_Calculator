Basic Calculator
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

A basic table-top calculator that can:

- chain operations, displaying the previous result on each subsequent operator
  press,
- repeat the last calculation on the new resulting value with each subsequent
  press of the equals button,
- negate input numbers and results,
- change

This is a project from the tailend of The Odin Project's (TOP) Fundamentals
curriculum. The TOP requirements are less than what this calculator can do. I
was using the Windows calculator as an example while coding the logic for
calculations. As I got the basics working, I became frustrated that my
calculator couldn't do several basic functions that the Windows one could.

For example, my calculator was not capable of repeating the last executed
calculation upon subsequent presses of the equals button. It also had no negate
function, could not change operator in the middle of an input, and could not
begin a new calculation after completing one without pressing the clearAll
button.

I realized that I needed the buttons to perform different functions, depending
on what step of the operation the user was inputing. At first, I spent several
hours coding if-statements that checked the status of the several variables that
were used in calculations. This quickly cluttered all of the button functions
and required that I carefully edit the same lines across all similar
button-types to modify features.

After sleeping on this problem, I decided to use a series of variables as
state-indicators. I added five variables and matching functions to enable each
one and disable all others.

Seperating the different functions of the buttons then simply relied on checking
the status of these "states". This made the function blocks much cleaner and
readable. I was also able to call console.logs on these "state change" functions
that would tell me what state had just been entered into. This was VERY useful
later on for modifying button behavior in certain states when bugs were
discovered.

I don't know if this kind of state-indication has a formal name, but I found it
very simplifying and helpful in completing this project.
