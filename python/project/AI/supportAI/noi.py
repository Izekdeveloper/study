robot_brain = "helo thong"

import pyttsx3
robot_mouth = pyttsx3.init()

# For Mac, If you face error related to "pyobjc" when running the `init()` method :
# Install 9.0.1 version of pyobjc : "pip install pyobjc>=9.0.1"

robot_mouth.say(robot_brain)
robot_mouth.runAndWait()