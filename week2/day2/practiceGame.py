# Hero
# Name
# attack
# defense
# hp

# Goblin
# attack
# defense
# hp

class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Hero"

    def takeDamage(self):
        self. attack -= 5


class Goblin:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Goblin"

    def takeDamage(self):
        self. attack -= 5


class Knight:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Knight"

    def takeDamage(self):
        self. attack -= 5


def characterAttacks(char1, char2):
    print(f"{char1.name} attacks {char2.name}")
    print(f"{char2.name} takes 5 damage")
    print(f"{char2.name} gets wrecked.")
    print(f"{char2.name}'s reamaining health is {char2.hp}")


def charachterCreation():
    character = ""
    charName = input("What is your name?")
    charClass = input("What is your class? - enter:((K)Knight), ((G)Goblin)")


character = charachterCreation()
# while character.hp > 0:
#     print("what would you like to do?")
#     (if)


bob = Goblin("Bob", 10)
philip = Hero("Philip", 10)
whitney = Hero("Whitney", 10),
carlo = Knight("Carlo", 10)

# bob attacking carlo

characterAttacks(bob, carlo)
