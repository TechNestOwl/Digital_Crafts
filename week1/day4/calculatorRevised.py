# if you did not use function
# you will change your logic for operands. and make them into functions
# you will give the user the ability to quit after they make a calculation
# or before they make a calculation with 'q'

# operand functions

print("Press 'q' to quit")


def qToQuit():
     return "You have quit."
     print()


def add(num1, num2):
    # operand == "+"????
    return num1 + num2


def subtract(num1, num2):
    return num1 - num2


def multiply(num1, num2):
    return num1 * num2


def divide(num1, num2):
    return num1 / num2


# user display options
print("Select an operation:")

print("+")
print("-")
print("*")
print("/")

# user input

operand = input("Enter operand:")
num1 = int(input("Enter first value:"))
num2 = int(input("Enter second value:")

# output
if operand == "+":
    print(num1 "+" num2 "=" add(num1, num2))
else:
    print("nope")
