# 1
# Create a User class, that has the  ability to print the users name
# the ability to print the users age

# Create a TempUser class, that has the ability to only print his name.

# Create a function that as you to give the user a name, and give the user an age, and will then
# create the user for you, and print it to the screen.
# The user will have a choice to either be a temp user or a User

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
    new_User = ""
    userName = input("What is your name?")
    userAge = input("What is your age?")
    userClass = input("Class select: 'User' or 'TempUser'?")

    if userClass == "User":
        new_user = User(userName, userAge)
        print(f"{userName}, age: {userAge} , class: {userClass}")
    elif userClass == "TempUser":
        new_user = TempUser(userName)
        print(f"{userName}, class: {userClass}")


createUser()


# 2
# Create a building class
# buildilng class will have
# height
# capacity
# sqft
# # commercial or residential
# commercial

class Building:
    def __init__(self, height, capacity, sqft, buildingType):
        self.height = height
        self.capacity = capacity
        self.sqft = sqft
        self.buildingType = buildingType


# ask the user to create a building (new instance of the building class)
# they will enter in height
# capacity (people)
# sqft


def createBuilding():
    print("New building creation..\n")
    newBuild = ""
    buildHeight = input("Enter building height:")
    buildCapacity = input("Enter building capacity:")
    buildSqft = input("Enter building sqft:")
    buildType = "Commercial"

    newBuild = Building(buildHeight, buildCapacity, buildSqft, buildType)
    print(newBuild.__dict__)


createBuilding()

# 3 instances of a building
# print out the specs of the buildilng everytime a building is made


# ??
# print statement needs to be a method
# ??
