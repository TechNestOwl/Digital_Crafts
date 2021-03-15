# digitalCraftsStudent = {
#     "name": "Gill Guimaraes",
#     "city": "Atlanta",
#     "computer": ["MacBook Pro"],

# }
# #  add a platform
# gamer = {
#     "platform": "Playstation 5",
#     "gamingHours": [{"weekday": "9-5"}, {"weekend": "rainy day"}],
#     "skill": 'totes not a noob'
# }
# print(digitalCraftsStudent["computer"][0])
# print("\n")
# print(gamer["gamingHours"][1]["weekend"])


# # print on the tereminal what time you would game...

car = {
    "model": "",
    "image": "",
    "year": "",
    "engineChoices": [
        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],
}


# print car engines
print(car["engineChoices"])
# print horsepower values only
for hpValue in car["engineChoices"]:
    for key, value in hpValue .items():
        print(value["horsepower"])
# check to see if value "trim" exists in dictionary


# def trimCheck(value):
#
#    if key in car.values():
#         print(f"Yes, {value} exists in this dictionary")
#     else:
#         print(f"No, {value} doesn't exist in this dictionary")

# Add color key to car dictionary
# car['colors'] = ["Soul Red", "Tungsten Metallic", "Ceramic Silver", "Boring Black"]
# add car image with shortened URL
# change
string = "Testing my repo"
# 1. print out a list of engine choices (the whole list) CHECK.
# 2. print out the horsepower values only (all of them)
# 3. check to see if the value "trim" exist on the car dictionary
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value
