# # title = input("Enter task title:")
# # priority = ["low", "medium", "high"]

# # tuple
# titleANDpriority = (title, priority)

# def addTask(title, priority):


def toDoList():
    while True:

        userTasks = []

        # WELCOME MESSAGE
        print("    **** TO-DO List ****\n\n"
              "Select an action from below:\n")
        print("Press 1 to add task\n"

              "Press 2 to delete task\n"

              "Press 3 to view all tasks\n"

              "Press q to quit")

        userSelection = input("Action:")

        # TASK OPTIONS
        if userSelection == "1":
            def addTask():
                for item in userTasks:
                    userTasks = [+ input("Enter new task:")]

                    # PRIORITY, HOW?

        elif userSelection == "2":
            def delete():
                # ??? -> I IS LOST
                userTasks = [-1:0]

        elif userSelection == "3":
            def viewAll():
                for item in userTasks:
                    print(item)

        elif userSelection == "q":
            def qToQuit():
                exit()

        else:
            print("Input not recognized. Refer to options above.")
            # userSelection = input("Action:")


toDoList()
