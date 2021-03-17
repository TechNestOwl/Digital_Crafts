# Create a User class, that has the  ability to print the users name
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name.
# Create a function that as you to give the user a name, and give the
# user an age, and will then create the user for you, and print it
# to the screen. The user will have a choice to either be a temp
# user or a User


class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def printUser(self):
        print(self.name)
        print(self.age)


class TempUser:
    def __init__(self, name):
        self.name = name

    def printTempUser(self):
        print(self.name)


def createUser():
    new_user = ""
    userClass = input("Are you a 'User' or 'TempUser'?")

    
    print(createdUser)


createUser()

# Bob = User("Bob", 25)
# User.printUser("Bob", 25)
# Jake = TempUser("Jake")
# createUser()
