# FIZZBUZZ
# fizzBuzzList = [1]
# for number in fizzBuzzList:
#     fizzBuzzList.append(1)


def fizzBuzz():
    for num in range(0, 101):
        if num % 3 == 0 and num % 5 == 0:
            # result = "FizzBuzz"
            print("fizzbuzz")
            continue
        if num % 3 == 0:
            # result = "Fizz"
            print("fizz")
            continue
            # print(result)
        if num % 5 == 0:
            print("buzz")
            continue
        print(num)


fizzBuzz()

# result = "Buzz"
# if input % (3, 5) == 0:
#     result = "FizzBuzz"
# for input == "101"       :
#     break
# else:
#     print(input)

# if number == 101:
#     break
# print("Done!")
