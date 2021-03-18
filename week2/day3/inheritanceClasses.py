class Currency:
    def __init__(self, name, homeNationCurrency, price, quantity):
        self.name = name
        self.homeNationCurrency = homeNationCurrency
        self.price = price
        self.quantity = quantity

    def printCurrency(self):
        print(
            f"{self.name} is the currencey of {self.homeNationCurrency}.{self.price} is it's value.")

    def addQuantity(self, amount):
        self.quantity += amount


yen = Currency("Yen", "Japan", 20)
dollar = Currency("Dollar", "U.S.", 1)
